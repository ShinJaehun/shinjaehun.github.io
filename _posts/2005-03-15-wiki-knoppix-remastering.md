---
layout: post
title: "Knoppix 3.7 Remastering"
info: "KLDP Wiki에 작성했던 Knoppix 3.7 리마스터링 문서"
tech: "Linux, Knoppix, Remastering"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/KnoppixRemastering"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 정리했던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

## What is the 'Remastering'?

to make a new master(= a recording from which all copies are made) of an earlier recording, usually in order to produce copies with better sound quality:

  - premastering: The process of formatting data into the exact image that will appear on a CD-ROM, including file structure (ie ISO 9660) and file locations. A premastered image is ready to be mastered and replicated.  

## 기본 원칙

KNOPPIX 의 변종이 많이 생기는 것으로 보아 기본 가이드 라인을 정해 놓는 것이 필요할 것 같습니다.

  - KNOPPIX 가 새로운 버전을 출시하면, 바로 한글화 한다.
    우리가 시도한 것과 충돌하는 경우, KNOPPIX 의 방식을 따른다. 가능한 모든 내용을 KNOPPIX 에 알려 반영되도록 한다.
  - 데비안 방식을 지킨다.
    하드디스크에 설치할 경우 데비안 방식을 디폴트로 한다.
  - 가능한 새로운 어플을 추가할 때는 데비안에 있는 것을 사용한다.
  - 한글 관련된 부분을 데비안에 누가 반영되도록 할 것 인가?  

**이상의 원칙은 debianusers wiki의 [knoppixko](http://debianusers.org/DebianWiki/wiki.php/KnoppixKo)문서에서 천명권님을 비롯한 knoppix에 관심있는 분들이 밝히신 knoppix 한글화의 기본 가이드라인입니다.**

## 준비

knoppix CD로 부팅한다. 리마스터링 작업을 수행할 하드디스크를 마운트한다.

``` 
 # mount /dev/hdc1 /mnt/hdc1
```

부팅한 /KNOPPIX 이하의 디렉토리를 방금 마운트한 하드디스크 파티션(hdc1)에 복사한다.

``` 
 # cd /mnt/hdc1
 # rm -Rf *
 # cp -Rp /KNOPPIX/* .
```

home 디렉토리에 knoppix 디렉토리를 만들고 knoppix 디렉토리의 소유권을 조정한다.

``` 
 # cd home
 # mkdir knoppix
 # chown knoppix.knoppix knoppix
```

/etc/fstab에 리마스터링할 하드디스크를 루트 파일 시스템으로 추가한다. 이를 통해 리마스터링할 하드디스크로 부팅이 가능하다.

``` 
 # cp /etc/fstab /mnt/hdc1/etc/
```

/mnt/hdc1/etc/fstab 파일에서 /hdc1과 관련된 정보를 삭제하고 다음과 같이 /dev/hdc1을 /로 마운트한다.

```
 /dev/hdc1  /      ext3 defaults,errors=remount-ro 0 0  
 /proc      /proc       proc   defaults            0 0  
 /sys       /sys        sysfs  noauto              0 0  
 /dev/pts   /dev/pts    devpts mode=0622           0 0  
 /dev/fd0   /mnt/auto/floppy auto   user,noauto,exec,umask=000    0 0  
 /dev/cdrom /mnt/auto/cdrom  auto   user,noauto,exec,ro 0 0  
 # Added by KNOPPIX  
 /dev/hda1 /mnt/hda1 ntfs  
 noauto,users,exec,ro,umask=000,uid=knoppix,gid=knoppix 0 0  
 # Added by KNOPPIX  
 /dev/hda5 /mnt/hda5 ntfs  
 noauto,users,exec,ro,umask=000,uid=knoppix,gid=knoppix 0 0  
 # Added by KNOPPIX  
 /dev/hdb1 /mnt/hdb1 ext3 noauto,users,exec 0 0  
 # Added by KNOPPIX  
 /dev/hdb2 none swap defaults 0 0  
```

**주의 : knoppix는 마운트 가능한 파티션을 자동적으로 인식하여 /etc/fstab에 관련 정보를 추가해버리므로 루트 파일 시스템을 지키기 위해서 가장 윗줄에 추가해야함을 명심하라.**

hdc1을 통해서 부팅한다. 기존에 설치되어 있는 GRUB를 활용하면 매우 손쉽게 hdc1으로 부팅할 수 있다. 이를테면 필자의 hdb1에 설치되어 있는 GRUB의 설정 파일을 활용할 수 있다. /mnt/hdb1/boot/grub/menu.lst 파일에 다음의 내용을 삽입한다.

```
title           KNOPPIX 3.7  
 root            (hd2,0)  
 kernel          /boot/vmlinuz root=/dev/hdc1 ro  
 savedefault  
 boot  
```

**initrd 정보가 없어도 부팅이 가능하다.**

hdc1을 통해 부팅하는 과정에서 다음과 같이 /proc 디렉토리가 없다는 메시지를 볼 수 있다.

/proc/mounts: No such file or directory  
 /proc/cmdline: No such file or directory  

## 한글화 설정 및 한글 관련 패키지 설치

이제부터 본격적으로 한글화를 시작해보자. /etc/locale.gen 파일을 수정하여 로케일을 변경한다. 

``` 
 edit /etc/locale.gen
```

다른 내용은 모두 지우고 한글 로케일만 남겨두었다.

```
  ko_KR.EUC-KR EUC-KR  
  ko_KR.UTF-8 UTF-8  
```

dpkg-reconfigure로 로케일을 변경한다. 기본 로케일은 ko_EUC-KR로 정했다.

``` 
 # dpkg-reconfigure locales
```

knoppix-autoconfig는 knoppix가 제공하는 자동설정 스크립트이다.

``` 
 edit /etc/init.d/knoppix-autoconfig
```

knoppix-autoconfig에 Lang, 키보드, 한글입력기 nabi와 관련된 설정을 한다.

```
 LANGUAGE="$(getbootparam lang 2>/dev/null)"  
  [ -n "$LANGUAGE" ] || LANGUAGE="ko"  

  ko)  
   # Korean version  
   COUNTRY="ko"  
   LANG="ko_KR.eucKR"  
   KEYTABLE="us"  
   XKEYBOARD="us"  
   KDEKEYBOARD="us"  
   CHARSET="iso8859-1"  
   # Additional KDE Keyboards  
   KDEKEYBOARDS="us"  
   XMODIFIERS="@im=nabi"  
   TZ="Asia/Seoul"  
   ;  
```

can't read lang option in grub.conf then lang is set to ko, but the result is de

/etc/X11/XF86Config.in /etc/X11/XF86Config  

45xsession 설정

``` 
 edit /etc/X11/Xsession.d/45xsession 
```

for mozilla preferred languages

```
if [ -n "$LANGUAGE" ]; then  
 # Set mozilla and netscape preferred languages  
 for f in `ls -1 $HOME/.mozilla/*/*/prefs.js $HOME/.netscape/preferences.js 2>/dev/null`; do  
 echo 'user_pref("intl.accept_languages", "'"$LANGUAGE"', en");' >>"$f"  
 case "$LANGUAGE" in  
 ko)  
 echo 'user_pref("browser.display.use_document_fonts", 0);' >>"$f"  
 echo 'user_pref("general.useragent.contentlocale", "KR");' >>"$f"  
 echo 'user_pref("general.useragent.locale", "ko-KR");' >>"$f"  
 echo 'user_pref("font.default", "sans-serif");' >>"$f"  
 echo 'user_pref("font.minimum-size.ko", 13);' >>"$f"  
 echo 'user_pref("font.name.monospace.ko", "UnDotum");' >>"$f"  
 echo 'user_pref("font.name.sans-serif.ko", "UnDotum");' >>"$f"  
 echo 'user_pref("font.name.serif.ko", "UnDotum");' >>"$f"  
 echo 'user_pref("intl.charset.default", "EUC-KR");' >>"$f" ;;  
 de|at|ch)  
 echo 'user_pref("general.useragent.contentlocale", "AT");' >>"$f"  
 echo 'user_pref("general.useragent.locale", "de-AT");' >>"$f" ;;  
 esac  
 # Else leave default language  
 done  
```

다음과 같이 userChrome.css를 불러올 수 있도록 만들어보자. - No such file or directory, * 디렉토리를 어떻게 지정해야 하는가??

```
cp /etc/skel/.mozilla/firefox/cd4z2gvd.default/chrome/userChrome.css $HOME/.mozilla/firefox/*/chrome  
```

for nabi

```
  startkde()  
  lnusertemp socket >/dev/null  

  # start nabi  
  if [ -n "$LANGUAGE" ]; then  
  case "$LANGUAGE" in  
  ko)  
  /usr/bin/nabi&  
  export XMODIFIERS="@im=nabi"  

  esac  
  fi  

  ksplash
  sleep 2  
```

konsolerc 설정

``` 
 edit /etc/skel/.kde/share/config/konsolerc
```

```
 defaultfont=Terminus,12,-1,5,50,0,0,0,0,0  
  font=8  

  DynamicTabHide=false  
  Height 768=477  
    
  TabViewMode=0  
  Width 1024=671  

  tabbar=2  
```

kxkbrc설정

``` 
 edit /etc/skel/.kde/share/config/kxkbrc
```

```
 Additional=de,fr  
  Layout=us  
```

edit /home/knoppix/.kde/share/config/kxkbrc, /etc/skel/.kde... edit /home/knoppix/.kde/share/config/kdeglobals, /etc/skel/.kde... Locale **위의 것은 키보드의 레이아웃과 관련된 문제 같은데 도저히 풀 길이 없어서 KDE 제어판의 키보드 레이아웃을 통해서 해결했다.**

일반적으로 한글 디렉토리명, 파일명을 보기 위해서는 /etc/fstab에 iocharset 옵션을 주어 사용한다. 그러나 knoppix는 부팅때마다 하드디스크의 파티션을 검색하여 /etc/fstab을 재작성해버리기 때문에 아무리 옵션을 적용한다한들 소용이 없다. 따라서 다음과 같이 /etc/fstab을 작성하는 스크립트를 수정함으로서 문제를 해결할 수 있다. /etc/fstab을 수정하는 스크립트는 /usr/sbin/rebuildfstab이다.

```
...  
 count=0  
 while read device mountpoint fstype relax; do  
  stringinfile "$device " "$TMP" || \  
  { count="$((count + 1))"  
    [ -d "$mountpoint" ] || mkdir -p "$mountpoint" 2>/dev/null  
    options="noauto,users,exec"  
    case "$fstype" in  
     ntfs) options="${options},iocharset=cp949,ro,umask=000" ;;  
     vfat|msdos) options="${options},iocharset=cp949,umask=000" ;;  
     swap) options="defaults" ;;  
    esac  
...  
```

apt-get을 활용하기 위해 소스리스트 정보를 수정한다. 필자는 기존의 /mnt/hdb1/etc/apt/source.list 파일을 복사해왔다.

``` 
 # cp sources.list /etc/apt/
```

apt-get을 업데이트한다.

``` 
 # apt-get update
```

업데이트가 끝났으면 한텀, 백묵글꼴, 한글 입력기 나비, 아미, imhangul을 설치한다.

``` 
 # apt-get install hanterm-xf ttf-baekmuk xfonts-baekmuk nabi ami imhangul
```

다른 이쁜 글꼴들도 받아두자.

``` 
 # apt-get install ttf-alee ttf-unfonts
```

미리 설치되어 있는 독일어 openoffice를 삭제하고 한국어 openoffice를 설치한다.

```
    # apt-get remove openoffice-de-en
    # apt-get install openoffice.org
    # apt-get install openoffice.org-l10n-ko
```

패널의 아이콘을 변경하기 위해서 다음과 같이 설정한다.

```
    # cd /usr/share/applnk/
    # ls
    # cd Office/
    # ls
    # mkdir OpenOffice
    # cd OpenOffice/
    # cp /usr/share/applications/ooo645writer.desktop openoffice.desktop
    # vi openoffice.desktop
```

Icon=ooo_gulls로 수정한다.  

Knoppix 3.8부터는 기본 웹브라우저가 Mozilla-firefox로 바뀌었다. firefox의 독일어 언어팩을 삭제하고 한글 언어팩을 설치한다.

``` 
 # apt-get remove mozilla-firefox-locale-de
 # apt-get install mozilla-firefox-locale-ko
```

Xine을 통해서 한글 자막을 볼 수 있도록 다음의 문서를 참고했다. <http://bbs.kldp.org/viewtopic.php?t=48878>

```
reboot
```

localepurge를 통해 한국어를 제외한 모든 언어팩을 삭제한다. localepurge를 통해 굉장히 많은 공간을 절약할 수 있다.

``` 
 # apt-get install localepurge
```

그러나 여전히 대부분의 메뉴가 독어로 보인다. kde 한글화 팩을 설치하자. kde 기반의 한컴리눅스에서 kde 한글화팩을 구할 수 있다. 다음의 ftp링크에서 받을 수 있다! <ftp://ftp.hancom.com/pub/HancomLinux/linux/i386/4.0/ftp/os/Hancom/RPMS/>

다운로드한 kde-i18n-korean RPM 패키지를 deb 패키지로 변환한다.

``` 
 # alien kde-i18n-Korean-3.2.3-041010.1hl.noarch.rpm
```

dpkg로 kde-i18n-korean을 설치한다.

``` 
 # dpkg -i --force-overwrite kde-i18n-korean_3.2.3-41011.1_all.deb             
```

reboot 이렇게 해도 이전 그대로 한글이 적용되지 않는 KDE가 뜬다면... 다음과 같이 기존의 KDE 설정 내용을 몽땅 지운후에 새로 처음부터 설정할 수 있도록 만들어버리자!

``` 
 # cd /home/knoppix 
 # rm -Rf *
 # rm -Rf .*
 # rm -Rf .qt
 # rm -Rf .kde
```

또 다시 reboot 아마도 KDE 마법사가 나타나면서 데스크탑 바탕화면을 새로 생성할 것이다. KDE 설정 마법사에 대한 설명은 생략한다.

## 불필요한 패키지 삭제

데비안 소스리스트가 제공하는 모든 패키지들을 다 쓸 수 있다면 얼마나 좋을까? 그러나 knoppix로 부팅할 수 있는 이미지의 크기는 CD 1장 분량의 700MB을 넘을 수 있다. 따라서 다음과 같이 불필요한 시스템에 불필요한 패키지를 삭제해야 한다.

패키지 삭제 작업을 자동화하기 위해 먼저 삭제할 패키지 리스트를 kicklist라는 이름으로 작성한다.

```
    # cat kicklist
```

```
x3270  
 3270-common  
 xfonts-x3270-misc  
 ibod  
 ipppd  
 isdnactivecards  
 isdnlog  
 isdnlog-data  
 libcapi20-2  
 isdnutils-base  
 isdnutils-xtools  
 isdnvboxclient  
 pppdcapiplugin  
 isdnactivecards  
 isdn-config  
 kde-i18n-cs  
 kde-i18n-da  
 kde-i18n-de  
 kde-i18n-es  
 kde-i18n-fr  
 kde-i18n-it  
 kde-i18n-ja  
 kde-i18n-nl  
 kde-i18n-pl  
 kde-i18n-ru  
 kde-i18n-tr  
 xtel  
 manpages-de  
 mozilla-locale-de-at  
 trans-de-en  
 user-de  
 euro-support  
 euro-support-console  
 euro-support-x  
```

dpkg 명령으로 kicklist에 등록되어 있는 패키지들을 일괄적으로 삭제한다.

```
    dpkg -P `cat kicklist`
```

몇 가지 더 삭제해야할 불필요한 정보가 남아있다.

``` 
 # cd /etc
 # rm -Rf isdn
 # rm -Rf 3270
```

- KDE 제어판에서 한글 글꼴을 수정한다.
- 모질라 웹 브라우저의 한글 글꼴을 수정한다.  

## 메뉴 편집하기

먼저 /etc/X11/Xsession.d/45xsession 파일을 수정한다. 127라인 정도에 있는 startkde()를 완전히 comment out해버린다.

```
     127 #startkde(){  
     128 # Play sound  
     129 #playsound  
     130  
     131 #if [ -z "$DONTCHANGE" ]; then  
     132 # No persistent homedir, copy everything  
     133 #rsync -Ha --ignore-existing /etc/skel/{.kde*,Desktop} $HOME/ 2>/dev/null  
     134 # if [ "$USER" = "knoppix" ]; then  

     155 #rsync -Ha --ignore-existing /etc/skel/Desktop/* $HOME/Desktop/ 2>/dev/null  
     156 #[ "$USER" = "knoppix" ] && rsync -Ha --ignore-existing /usr/share/knoppix/profile/Desktop/* $HOME/Desktop/ 2>/dev/null  
     157 #rm -f $HOME/.kde/Autostart/sorticons.desktop  
     158 #fi  
```

/etc/init.d/knoppix-autoconfig 파일에 다음의 라인을 추가한다. **fi 이후에 추가하는 것을 잊지 말것!**

```
    1153 # Check for configuration floppy add-on if not running from HD  
    .....  
    1210 cp -R /etc/skel/.??* /home/knoppix  
    1211 cp -R /etc/skel/* /home/knoppix  
    1212 chown -R knoppix:knoppix /home/knoppix  
```

I must now mention the file /etc/X11/Xsession.d/45xsession. This script controls how knoppix behaves & how knoppix creates the knoppix user's home directory. I am looking for the ninth occurence of rsync in the script and it is found at the line 128:

```
     126: if [ -z "$DONTCHANGE" ]; then  
     127: # No persistent homedir, copy everything  
     128: rsync -Ha --ignore-existing /etc/skel/ $HOME/ 2>/dev/null  
     129: [ "$USER" = "knoppix" ] && rsync -Ha --ignore-existing /usr/share/knoppix/profile/{.kde*,Desktop} $HOME/ 2>/dev/null  
```

  - K메뉴-설정-차림표고치기로 메뉴를 편집한다.
  - KDE 제어판을 통해서 원하는 window decorations, theme, 글꼴, 바탕화면을 설정한다.
  - Mozzila Firefox 같은 응용프로그램의 환경설정도 remastering 후에 반영하는 것이 가능하다.  

현재의 KDE 설정상태를 /etc/skel로 복사해야 한다. 먼저 기존의 /etc/skel 파일을 삭제하고 /home/knoppix에 설정되어 있는 KDE 설정 내용을 /etc/skel로 복사하자. 복사 후에 소유권을 원래의 root 유저로 변경하는 것도 잊지 않기 바란다.

``` 
   # rm -rf /etc/skel
   # mv /home/knoppix /etc/skel
   # chown -R root:root /etc/skel
```

이로서 /home/knoppix 디렉토리는 부팅때마다 새로 생성될 것이다.

## CD 이미지 굽기

/ 디렉토리에 /KNOPPIX.build 디렉토리를 만들어서 필요한 스크립트를 모두 복사하고 /KNOPPIX.build/Knoppix.Master 디렉토리를 생성한다. 이 디렉토리 이하에 원본 Knoppix CD를 마운트해서 CD의 /KNOPPIX와 /boot 디렉토리를 비롯한 모든 파일을 복사했다.

빌어먹을 lang=us로 부팅을 하다보니 locale이 C로 되어 있다. 망할;;;

```
    edit KNOPPIX.build/Knoppix.Master/boot/isolinux/isolinux.cfg
```

```
  lang=en  
  lang=ko  
```

한가지 더! Knoppix 3.8 CeBIT Ed는 기본적으로 부팅때 독일어 키보드를 지원하게 되어 있다. 이게 의외로 성가시므로 다음의 라인을 삭제하도록 하자.

```
  KBDMAP=german.kbd  
```

이 작업이 끝나면

```
touch mkisofs.timestamp
```

Knoppix.mksortlist Knoppix.mkcompressed 이 스크립트가 Knoppix.postupgrade 와 Knoppix.clean 스크립트를 수행시킨다. Knoppix.mkisofs 를 수행합니다.

```
 cdrecord -v -dao -pad -eject driveropts=burnfree dev=0,0,0 speed=12 fs=24M ISO파일명
```

## 참고문헌

천명권, knoppix 3.7 한글화 <http://debianusers.org/DebianWiki/wiki.php/KnoppixKo37>

천명권, 하드디스크 마운트 준비 <http://debianusers.org/DebianWiki/wiki.php/KnoppixCd>

천명권, 한글 패키지를 위한 공간 만들기 <http://debianusers.org/DebianWiki/wiki.php/KnoppixKo>

천명권, 한글 패키지 설치하기 <http://debianusers.org/DebianWiki/wiki.php/KnoppixAddPackagesforHangul>

천명권, 한글관련 설정 <http://debianusers.org/DebianWiki/wiki.php/KnoppixKo>

천명권, cd 이미지 생성 <http://debianusers.org/DebianWiki/wiki.php/KnoppixKo>

신재훈, Debian Install Using Knoppix <http://wiki.kldp.org/wiki.php/DebianInstallUsingKnoppix>

Knoppix.net, Knoppix Remastering Howto <http://www.knoppix.net/wiki/Knoppix_Remastering_Howto>

Kyle Rankin, Knoppix Hacks, O'Reilly

## 커맨트

이 문서에 대한 조언을 부탁드립니다.

-----

/etc/locale.gen 파일을 수정하여 로케일을 변경한다. Knoppix.mkcompressed에서 MYLOCALE 변수를 "C en ko" 에서 "ko"로 변경하였다. 이 경우 C 와 en 에 해당하는 부분은 남기는 것이 좋지 않을까 생각합니다. 프로그램 중에 LANG 을 C 로 변경하고 수행하는 것이 있을 수 있습니다.

/proc 에 관한 오류 메시지가 어느 단계에서 나오는지 궁금합니다. - tcheun -- tcheun 2005-03-14

-----

첫 부팅때 /proc 디렉토리가 없다는 메시지를 확인할 수 있었으나 지금은 부팅시 아무 이상이 없습니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-03-15

-----

knoppix3.8 이 나왔습니다. 저는 당분간 손을 못 델것 같습니다. 먼저 한글판을 만들어 보시는 것이 어떨지요? 그 사이에 어떻게든 ftp 사이트를 구해 보겠습니다. 의견 주시기 바랍니다. -- tcheun 2005-04-04

-----

언제면 다운로드가 가능할지 가늠하고 있었는데 이제 열렸나보군요. 제가 감히 명권님보다 앞서 할 수 있을까 걱정이 앞섭니다. 일단, 기쁜 마음으로 제가 할 수 있는데 까지 해 보도록 하겠습니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-04

-----

ftp 로는 못하고 bittorrent 를 사용하여 다운로드 받았습니다. -- 61.78.94.22 2005-04-04

-----

<http://www.knoppix.net/forum/viewtopic.php?t=17398&postdays=0&postorder=asc&highlight=torrents&start=40> -- 211.184.197.18 2005-04-04

-----

특별히 추천해주실 만한 bittorrent 주소는? -- 211.184.197.18 2005-04-04

-----

Knoppix 3.8의 한글화를 위해 위의 과정을 그대로 수행하던중 몇가지 문제가 발견되었습니다.

1.  최종 이미지를 구워내기위해 실행한 cdrecord가 커널 2.6에서 제대로 동작하지 않아 xcdroast를 설치하여 구워내야만 했습니다. knoppix는 커널 2.6기반으로 완전히 전환되었는데 cdrecord가 제대로 동작하지 않았습니다.
2.  captive ntfs 도 빠져 있음
3.  klik client의 미설치
4.  특정 컴퓨터(Dell) 에서는 마우스도 이상한 현상
5.  apt 를 사용하여 새로운 패키지 설치를 해 보셨는지요? -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-07

-----

apt 를 사용하여 새로운 패키지를 설치하는 것은 새로운 기능입니다. 과거에는 못하던 일이죠. 누군가가 시험을 해 보고 알려 주면 좋겠군요. -- 61.78.94.22 2005-04-07

-----

knoppix 3.7 한글 버전을 <ftp://ftp.kr.freebsd.org/pub/users/tcheun/> 에 올려 놓았습니다. 이 곳에 3.8 버전이 있는데 크기로 보아 덜 올라 온 것 같습니다. -- 61.78.94.22 2005-04-07

-----

<http://www.knoppix.net/forum/viewtopic.php?t=17398&postdays=0&postorder=asc&start=10> 인용

In linuxrc at line 645 is where unionfs is used. According to it, the ramdisk is mounted on top of the readonly CDROM so that we can make "live changes" to the CDROM but the changes are actually written to the ramdisk.  

매우 중요한 정보입니다. unionFS가 어떻게 동작하는지 linuxrc스크립트에서 정의하고 있군요!

-- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-08

-----

<http://www.knoppix.net/forum/viewtopic.php?t=17398&postdays=0&postorder=asc&start=10> 인용

Yeah, it's a sponsored beta release it's freely redistributable just as any other Knoppix... Basically it's released first at CeBit to encourage people to come out to the conference... In the past I beleive they had LiveDVD version at one of those conferences also.  

I got the 3.7 CeBit release wayback before the "official" was released, wanted to try out the NX server stuff (which is quite cool). I was going to do a Centrino Laptop distro off of 3.7, but I think I'll wait till I see what the whole unionfs thing is like.  

T'would be nice if someone who has a copy could ISO it and post a Torrent... hint, hint  

지금 우리가 받고 테스트해보는 CeBIT Edition은 official release는 아닌 것으로 생각됩니다. 공식 릴리즈 후에야 비로소 모든 기능이 제대로 동작하는 것 아닐까요? -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-08

-----

버그들이 있을 것입니다. 먼저번에 경우로 보아 official version 은 몇개월 뒤에 나오더군요. 저희도 정식 한글 버전은 official 버전으로 만드는 것이 좋다고 생각합니다. -- tcheun 2005-04-08

-----

knoppix lang=us acpi=off 부팅시 hyperthreading SMP를 위해 acpi 옵션을 조절해 보셨습니까? SATA는 어떤지요? -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-08

-----

acpi=off noapic 를 사용한 경우는 어떤 때는 되고 어떤 때는 안 되었습니다. 그리고 여기에 nousb 를 추가한 경우는 마우스의 이동이 조금 이상하였구요. -- tcheun 2005-04-08

-----

일단 제 경우는 가장 일반적인 데스크탑 모델에서 아무 옵션 없이 정상적으로 작동하는 것을 확인했습니다. 또한 노트북 삼성 Sens P10에서 역시 정상적인 작동을 확인했습니다. '어떤 때는 되고 어떤 때는 안 되는' 이러한 경우야 말로 난감한 상황이라고 할 수 있겠죠. 어떻게 극복할 수 있을까요....

  - 한글화된 3.8 이미지를 위의 <ftp://ftp.kr.freebsd.org/pub/users/tcheun에> 올릴 수 없을까요? (뭐 그래봐야 가장 기본적인 locale 설정에 몇몇 응용프로그램의 한글화 설정이 전부입니다.)
  - 명권님의 3.7을 받아서 확인해봤습니다만 index.html은 어떻게 수정할 수 있나요? 참고할만한 문서는 없나요? -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-08

-----

Captive-NTFS doesn't appear to be in the 3.8-2005-02-28-CeBIT_Edition of Knoppix. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-09

-----

index.html 은 그냥 편집기를 사용해서 고치면 됩니다. 만드신 iso 파일을 저에게 전달할 방법이 있으면 좋은데.... 아니면 제가 작업을 해서 올리는 수 밖에 없을 것 같습니다. 혹시 무선 랜을 시험해 보셨는지요? -- tcheun 2005-04-09

-----

이제 themes, window decorations, fonts, 바탕화면 이미지 등을 적용하는 것이 가능해졌습니다. 부팅때마다 /home/knoppix를 /etc/skel로부터 복사함으로서 생성할 수 있도록 knoppix-autoconfig에 설정해주면 되는 것입니다!! 명권님도 꼭 해 보시길! -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-10

-----

무선랜 설정에 대해서는 knoppix의 wavelan configuration을 이용하는 것으로 알고 있습니다만 이게 사용하는 것이 쉽지가 않네요. 그나마 제게 무선랜 AP가 있어서 다행입니다. 좀 더 연구를 해봐야 겠습니다. 무선랜 접속을 위해 KLDP.net의 Linspot을 주로 사용하십니까? Linspot은 한동안 개발이 중지된 것으로 알고 있습니다만 Windows 환경의 무선랜 접속 클라이언트 처럼 리눅스에서도 쉽게 무선랜을 활용할 수 있는지 알고 싶습니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-10

-----

unionFS는 성공적인 듯 싶습니다. apt-get이 실행되어서 당황했는데 자세히 보니 디렉토리의 절대경로가 /ramdisk/home/knoppix, /UNIONFS/home/knoppix 이런 식으로 이분화되어 있는 것을 확인할 수 있었습니다. unionFS에 대해 아직 연구가 부족합니다. 좀더 공부해야할 필요가 있네요. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-10

-----

45xsession 에서 dontchange 부분을 check 하지 않으면, persistent home 을 만들어 놓은 경우에 문제가 있을 것 같습니다. persistent home 기능을 사용해 보셨는지요? 무선랜의 경우, 3.3 인지, 3.4 인지에서는 linspot 을 시험해 보았고, 잘 되었습니다. kt 에서 프로토콜을 바꿔 수정한다는 것까지는 보았는데... unionFS 는 생각해야 할 부분이 많이 있습니다. <http://klik.atekon.de/> 에 보시면 사용자가 apt 를 사용하지 않고, 인터넷에서 단지 마우스클릭만 하여 어플을 설치하는 내용이 있습니다. 이 부분이 unionFS 에 의해 보다 좋은 방법이 생길 것 같은데.... -- tcheun 2005-04-11

-----

마침 어제 밤에 persistent home기능을 테스트해봤습니다. 3.8에서는 NTFS에서의 persistent home 기능도 가능해졌다고 해서 테스트해봤습니다만 어떤 이유에서인지는 몰라도 아직 CeBIT Ed에서는 NTFS에서의 persistent home 기능을 제한하고 있다고 합니다. <http://www.knoppix.net/forum/viewtopic.php?t=18192> 음... 혹시 말씀대로 45xsession 파일을 수정했기 때문에 사용 못하는 것은 아닐까요? hdd에서 테스트해봐야겠습니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-11

-----

ntfs 에서의 persistent home 기능은 captive-ntfs 가 되어야 될 것입니다. 아직 linux-ntfs 에서는 write 기능을 제공하지 않고 있으며, captive-ntfs 는 중단된 상태입니다. -- tcheun 2005-04-11

-----

다행스럽게도 45xsession을 수정한 결과가 persistent home directory 기능을 방해하지는 않았습니다. 테스트는 ext3에서 성공했으며 말씀드린대로 ntfs에서의 persistent home directory 기능에 대해서는 정식 버전이 발표된 이후를 기대해 봐야할 것 같습니다. (ext3에서의 성공으로 미루어 추측컨대 FAT32에서 역시 가능할 것이라고 생각합니다.) 아울러 Save Knoppix configuration 기능도 잘 동작하는 것을 확인했습니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-13

-----

어제 새로 릴리즈된 3.8.1버전을 리마스터링하다가 중대한 문제를 발견했습니다. 백업해놓은 45xsession과 knoppix-autoconfig를 사용해서 재부팅하니까 kde-i18n-korean의 적용을 받지 못하고 독일어 환경의 영향을 받게 되었습니다. 따라서 kde-i18n-korean의 적용을 받을 수 있도록 45xsession과 knoppix-autoconfig 파일에 기본적인 수정만 한 뒤에 (nabi가 동작할 수 있는 설정) 최종적으로 Knoppix.Build 스크립트를 사용해서 이미지를 생성하기 직전에 백업해놓은 45xsession과 knoppix-autoconfig를 복사해 넣어야 할 것입니다. -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-18

-----

기존의 45xsession, knoppix-autoconfig를 버리고 새로 orig 파일에서 편집, 수정하여 리마스터링할 것.-- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-04-18

-----

이해가 잘 되지 않습니다. kde-i18n-Korean 은 locale 밑에 파일들을 생성만 하는 것으로 이해하고 있습니다. 이는 45xsession 밑 knoppix-autoconfig 와 전혀 상관이 없는 것으로 생각되는데.... 혹시 isolinux.cfg 에 lang 이 de 로 설정되어 있는 것이 아닌지? 이것도 말이 되지 않는군요. 좀 더 정확히 설명을 해 주었으면 합니다. --tcheun

-----

45xsession의 내용에서 startkde() 부분이 주석처리되면서 발생했던 문제인 듯 합니다. 어제 새벽에 작업을 해서 정확히 기억이 나지는 않습니다만

  - 로케일이 한글로 나오지 않고 독일어로 나와버렸다거나
  - KDE 기본 데스크탑 환경 있죠? 그 바탕화면 그림도 없고 패널에도 가장 기본적인 KDE용 프로그램들만 등록되어 있는...

이 둘중에 하나의 현상이 나타났는데 (죄송합니다 다시한번 말씀드리지만 어제 새벽에 졸면서 작업을 해서 정확히 기억이 나지 않습니다.) 어쨌든 knoppix-autoconfig와 45xsession의 원본 파일을 사용해서 다시 리마스터링하니까 Knoppix KDE 환경에 한글 로케일이 설정되는 것을 확인할 수 있었습니다. kde-i18n-Korean과는 상관이 없나요? 로케일이 euc-kr 등으로 되어 있어야 kde-i18n-Korean이 제대로 동작한다고 알고 있었는데... (음... kde-i18n-Korean에 대해서도 연구가 필요하군요;;;)

-----

3.8.1 버전에 대해서 다음과 같은 문제가 발견되었습니다. (knoppix.net에서 인용합니다.)

  - cound not detect on SATA driver(이전에도 같은 문제가 있었던 듯 합니다. Dell 머신이죠? 아마?)
  - BTTV TV utility be scripted wrong
  - IBM T41 laptop have no sound and not detect on wlan-card

-----

방금 한가지 또다른 문제를 발견했습니다. 바로 USB 드라이버를 제대로 인식하지 못한다는 점인데요. 이 때문에 persistent home directory 기능을 USB 드라이버에서 사용할 수가 없었습니다. 3.7에서는 USB 드라이버를 /dev/sda1으로 인식하다가 3.8.1에서는 /dev/uba1으로 잡히는 것을 확인했습니다. 아마도 UNIONFS으로 전환함으로서 생기는 크고작은 문제들 중 하나인 것으로 판단됩니다.

또한 3.8 CeBIT Ed와 마찬가지로 NTFS에서 persistent home directory 기능이 제대로 동작하지 않았습니다. Captive NTFS는 아직도 요원한가요?

메이저 8버전으로의 첫번째 마이너 업그레이드이기 때문에 이러한 자잘한 버그 및 기대에 미치지 못하는 기능들이 눈에 띄는 것으로 생각합니다. 빨리 문제들이 해결될 것을 기대하는 바입니다.
