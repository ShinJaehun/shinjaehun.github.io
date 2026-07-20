---
layout: post
title: "remaster scripts를 이용한 Knoppix Remastering"
info: "KLDP Wiki에 작성했던 remaster scripts 기반 Knoppix 3.8 리마스터링 문서"
tech: "Linux, Knoppix, Remastering"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/KnoppixRemasteringRScripts"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 정리했던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  

## 기본 원칙

KNOPPIX 의 변종이 많이 생기는 것으로 보아 기본 가이드 라인을 정해 놓는 것이 필요할 것 같습니다.

  - KNOPPIX 가 새로운 버전을 출시하면, 바로 한글화 한다.
    우리가 시도한 것과 충돌하는 경우, KNOPPIX 의 방식을 따른다. 가능한 모든 내용을 KNOPPIX 에 알려 반영되도록 한다.
  - 데비안 방식을 지킨다.
    하드디스크에 설치할 경우 데비안 방식을 디폴트로 한다.
  - 가능한 새로운 어플을 추가할 때는 데비안에 있는 것을 사용한다.
  - 한글 관련된 부분을 데비안에 누가 반영되도록 할 것 인가?  

**이상의 원칙은 debianusers wiki의 [KnoppixKo](http://debianusers.org/DebianWiki/wiki.php/KnoppixKo)****문서에서 천명권님을 비롯한 knoppix에 관심있는 분들이 밝히신 knoppix 한글화의 기본 가이드라인입니다.**

## 개요

기본적인 아이디어는 매우 간단하다.

1.  remastering 스크립트를 활용하여 knoppix CD에 있는 파일들을 추출하고 이를 /mnt/hdc1/remaster/Knoppix.build/Knoppix.Master에 복사한다.
2.  /mnt/hdc1/remaster를 루트 디렉토리로 chroot하고 리패키징한다.
3.  chroot 상태에서 X를 실행하고 원하는 대로 X 환경을 설정한다.
    이때 KDE 설정 내용 외의 프로그램 즉, /home/knoppix/.kde 디렉토리 이외의 다른 설정에 대해서는 고민을 좀 해봐야 할 듯 하다. (특히 mozilla-firefox는 /home/knoppix에서 /etc/skel로 복사될 때 다르게 변환되는 부분이 있나?? 돌아버리는 줄 알았다.)
4.  chroot 상태를 종료하고 CD 이미지로 압축한다.
5.  압축된 CD 이미지를 CD RW로 구워내면 모든 작업 끝.  

## 준비 : knoppix CD에서 파일 추출하기

영문 knoppix를 CD로 구워내서 부팅한다. knoppix가 부팅한 뒤에 독문 로케일, 독문 키 배열로 전환되어버리면 당황스럽기 때문에 부팅 때 cheat code lang을 지정해서 부팅하자.

```
    knoppix lang=us
```

부팅이 끝났으면 하드디스크를 파티셔닝하고 포멧한다.

```
    cfdisk /dev/hda1
    mke2fs -vj /dev/hda1
```

방금 포멧한 /dev/hda를 마운트하고 remaster 디렉토리를 만든다.

```
    mount -t ext3 /dev/hda1 /mnt/hda1
    mkdir /mnt/hda1/remaster
```

remaster 스크립트를 다운로드한다. (<http://debian.tu-bs.de/knoppix/remaster/>) 다운로드 위치는 /mnt/hda1이며 압축을 풀고 scripts 디렉토리를 만들어 옮긴다. (remaster 스크립트를 제대로 실행하기 위해 디렉토리 이름을 바꾸어 줘야 한다.)

```
    tar zxvf remaster-0.1-6.tar.gz
    mv remaster-0.1 scripts
    cd scripts
```

이제 스크립트를 실행시켜 knoppix CD에서 파일을 추출해 보자. 다음과 같이 명령을 내리면 새로운 창이 나타날 것이다.

```
    ./knoppix-remaster /mnt/hda1/remaster
```

[DeleteMe](https://wiki.kldp.org/wiki.php/DeleteMe) knoppix-remaster, 메뉴에 대한 설명

## 로케일 설정

이제부터 본격적으로 한글화를 시작해보자. 이 절의 설정 내용은 모두 chroot 내에서 설정하여 /mnt/hda1/remaster에 반영할 수 있도록 한다.

### 로케일 변경

/etc/locale.gen 파일을 수정하여 로케일을 변경한다. 다른 내용은 모두 지우고 한글 로케일만 남겨두었다.

```
ko_KR.EUC-KR EUC-KR  
 ko_KR.UTF-8 UTF-8  
```

dpkg-reconfigure로 로케일을 변경한다. 기본 로케일은 ko_EUC-KR로 정했다.

```
    dpkg-reconfigure locales
```

### knoppix-autoconfig

/etc/init.d/knoppix-autoconfig는 knoppix가 제공하는 자동설정 스크립트이다. knoppix-autoconfig에 LANG, KEYTABLE 등의 쉘 변수를 지정함으로서 knoppix가 부팅한 뒤의 로케일을 비로소 eucKR로 전환할 수 있다. 또한 XMODIFIERS를 nabi로 설정함으로서 한글입력기 nabi가 제대로 실행될 수 있도록 하는 것을 잊지 말자.

```
LANGUAGE="$(getbootparam lang 2>/dev/null)"  
  [ -n "$LANGUAGE" ] || LANGUAGE="ko"  

  ko)  
   # Korean version  
   COUNTRY="ko"  
   LANG="ko_KR.UTF-8"  
   KEYTABLE="us"  
   XKEYBOARD="us"  
   KDEKEYBOARD="us"  
   CHARSET="iso8859-1"  
   # Additional KDE Keyboards  
   KDEKEYBOARDS="us"  
   XMODIFIERS="@im=nabi"  
   TZ="Asia/Seoul"  
   ;;  
```

### 45xsession

/etc/X11/Xsession.d/45xsession은 knoppix가 부팅하는 X 환경을 자동적으로 설정해주는 파일이다. 즉 파일에 설정되어 있는 내용을 통해 매번 부팅때마다 /home/knoppix가 새로 생성되는 셈이다.

mozilla-firefox의 언어, 글꼴에 대해 설정한다. 여기에서 설정되는 내용은 mozilla-firefox 의 부팅 후 prefs.js에 반영된다.

```
if [ -n "$LANGUAGE" ]; then  
 # Set mozilla and netscape preferred languages  
 for f in `ls -1 $HOME/.mozilla/*/*/prefs.js $HOME/.netscape/preferences.js 2>/dev/null`; do  
 echo 'user_pref("intl.accept_languages", "'"$LANGUAGE"', en");' >>"$f"  
 case "$LANGUAGE" in  
 ko)  
 echo 'user_pref("general.useragent.contentlocale", "KR");' >>"$f"  
 echo 'user_pref("general.useragent.locale", "ko-KR");' >>"$f"  
 de|at|ch)  
 echo 'user_pref("general.useragent.contentlocale", "AT");' >>"$f"  
 echo 'user_pref("general.useragent.locale", "de-AT");' >>"$f" ;;  
 esac  
 # Else leave default language  
 done  
```

45xsession에서 knoppix에서 mozilla-firefox profile은 /usr/share/knoppix/profile/.mozilla에서 참조한다는 사실을 발견했다. 왜 이제까지 이 코드를 못 보고 지나쳤을까.

```
if [ ! -e $HOME/.mozilla -a "$FREESPACE" -gt 1500 ] && [ -d /etc/skel/.mozilla -o -d /usr/share/knoppix/profile/.mozilla ]; then  
 rsync -Ha --ignore-existing /etc/skel/.mozilla $HOME/ 2>/dev/null  
 [ "$USER" = "knoppix" ] && rsync -Ha --ignore-existing /usr/share/knoppix/profile/.mozilla $HOME/ 2>/dev/null  
fi
```

knoppix.net의 how to : remaster knoppix the easy way using menu based remaster scripts 문서에 있는 대로 chroot 내부에서 /etc/skel을 없애고 /home/knoppix를 그대로 /etc/skel로 덮어버리면 remastering후 mozilla-firefox를 실행할 때에 user profile을 재설정해야 하는 문제가 발생할 수 있다. 따라서 위 작업 후에 /etc/skel은 원본 영문 knoppix CD의 /etc/skel의 내용으로 덮고 profile을 직접 수정해야한다.

prefs.js와 userChrome.css를 취향에 맞게 수정한다.

한글 입력기 nabi가 실행되기 위해서 다음과 같이 설정한다.

```
 startkde()  
  lnusertemp socket >/dev/null  

  # start nabi  
  if [ -n "$LANGUAGE" ]; then  
  case "$LANGUAGE" in  
  ko)  
  /usr/bin/nabi&  
  export XMODIFIERS="@im=nabi"  
  ;;  
  esac  
  fi  

  ksplash  
  sleep 2  
```

### rebuildfstab

일반적으로 한글 디렉토리명, 파일명을 보기 위해서는 /etc/fstab에 iocharset 옵션을 주어 사용한다. 그러나 knoppix는 부팅때마다 하드디스크의 파티션을 검색하여 /etc/fstab을 재작성해버리기 때문에 아무리 옵션을 적용한다한들 소용이 없다. 따라서 다음과 같이 /etc/fstab을 작성하는 스크립트를 수정함으로서 문제를 해결할 수 있다. /etc/fstab을 수정하는 스크립트는 /usr/sbin/rebuildfstab이다.

```
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
```

## 리패키징

이번 절에서 원하는 패키지를 설치/제거한다.

### 패키지 업데이트

**first, edit /etc/resolv.conf**

apt-get을 활용하기 위해 소스리스트 정보를 수정한다. 필자는 기존의 /mnt/hdb1/etc/apt/source.list 파일을 복사해왔다.

```
    cp /mnt/hdb1/etc/apt/sources.list /etc/apt/
```

apt-get을 업데이트한다.

```
    apt-get update
```

업데이트가 끝났으면 한텀, 백묵글꼴, 한글 입력기 나비, 아미, imhangul을 설치한다.

``` 
 apt-get install hanterm-xf ttf-baekmuk xfonts-baekmuk nabi ami imhangul
```

다른 이쁜 글꼴들도 받아두자.

``` 
 apt-get install ttf-alee ttf-unfonts
```

### openoffice.org 한글지원

미리 설치되어 있는 독일어 openoffice를 삭제하고 한국어 openoffice를 설치한다.

```
    apt-get remove openoffice-de-en
    apt-get install openoffice.org
    apt-get install openoffice.org-l10n-ko
```

패널의 아이콘을 변경하기 위해서 다음과 같이 설정한다.

``` 
 cd /usr/share/applnk/
 ls
 cd Office/
 ls
 mkdir OpenOffice
 cd OpenOffice/
 cp /usr/share/applications/ooo645writer.desktop openoffice.desktop
 vi openoffice.desktop
```

Icon 항목을 ooo_gulls로 수정하면 openoffice를 상징하는 갈매기 아이콘이 패널에 나타날 것이다. (이 아이콘은 앞에서 한 설정에 의해 openoffice writer를 실행할 것이다.)

```
 Icon=ooo_gulls  
```

### mozilla-firefox 한글지원

knoppix 3.8부터는 기본 웹브라우저가 mozilla-firefox로 바뀌었다. firefox의 독일어 언어팩을 삭제하고 한글 언어팩을 설치한다.

``` 
 apt-get remove mozilla-firefox-locale-de
 apt-get install mozilla-firefox-locale-ko
```

firefox의 profile 파일을 수정한다. prefs.js

```
...  
 user_pref("browser.display.use_document_fonts", 0);  
 user_pref("browser.preferences.lastpanel", 0);  
 user_pref("browser.search.selectedEngine", "Google");  
 user_pref("browser.startup.homepage", "");  
 user_pref("browser.startup.homepage_override.mstone", "rv:1.7.10");  
 user_pref("extensions.disabledObsolete", true);  
 user_pref("extensions.lastAppVersion", "1.0");  
 user_pref("font.default", "sans-serif");  
 user_pref("font.language.group", "ko");  
 user_pref("font.minimum-size.ko", 13);  
 user_pref("font.name.monospace.ko", "UnDotum");  
 user_pref("font.name.monospace.x-western", "monospace");  
 user_pref("font.name.sans-serif.ko", "UnDotum");  
 user_pref("font.name.sans-serif.x-western", "sans-serif");  
 user_pref("font.name.serif.ko", "UnDotum");  
 user_pref("font.name.serif.x-western", "serif");  
 user_pref("general.useragent.contentlocale", "KR");  
 user_pref("general.useragent.locale", "ko-KR");  
 user_pref("intl.accept_languages", "ko, en");  
 user_pref("intl.charset.default", "EUC-KR");  
 user_pref("intl.charset.detector", "ko_parallel_state_machine");  
 user_pref("intl.charsetmenu.browser.cache", "UTF-8, EUC-KR");  
 user_pref("network.cookie.prefsMigrated", true);  
 user_pref("security.warn_entering_secure", false);  
 user_pref("security.warn_leaving_secure", false);  
 user_pref("security.warn_submit_insecure", false);  
```

userChrome.css

```
...  
  * {  
     font-size: 9pt !important;  
     font-family: UnDotum !important;  
    }  
```

### Xine 한글자막

Xine을 통해서 한글 자막을 볼 수 있도록 다음의 문서를 참고했다. <http://bbs.kldp.org/viewtopic.php?t=48878>

### 불필요한 언어팩 제거

localepurge를 통해 한국어를 제외한 모든 언어팩을 제거한다. localepurge를 통해 굉장히 많은 공간을 절약할 수 있다.

``` 
 apt-get install localepurge
```

### kde 한글지원팩 설치

이제 kde 한글지원 팩을 설치하자. kde 기반의 한소프트리눅스에서 kde 한글화팩을 구할 수 있다. 다음의 haansoftlinux ftp링크에서 받을 수 있다! <ftp://ftp.haansoftlinux.com/pub/haansoftlinux/OS/2005/Workstation/RPMS/> **kde3.3버전용 i18n 패키지이지만 kde3.4에서 사용하는 것도 가능하다.**

다운로드한 kde-i18n-korean RPM 패키지를 deb 패키지로 변환한다.

``` 
 alien kde-i18n-Korean-3.3.0-4hs.noarch.rpm
```

dpkg로 kde-i18n-korean을 설치한다.

``` 
 dpkg -i --force-overwrite kde-i18n-Korean-3.3.0-4hs.noarch.rpm
```

### 불필요한 패키지 삭제

데비안 소스리스트가 제공하는 모든 패키지들을 다 쓸 수 있다면 얼마나 좋을까? 그러나 knoppix로 부팅할 수 있는 이미지의 크기는 CD 1장 분량의 700MB을 넘을 수 있다. 따라서 다음과 같이 불필요한 시스템에 불필요한 패키지를 삭제해야 한다.

패키지 삭제 작업을 자동화하기 위해 먼저 삭제할 패키지 리스트를 kicklist라는 이름으로 작성한다.

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
 cd /etc
 rm -Rf isdn
 rm -Rf 3270
```

## chroot 상태에서 X 실행 및 X 환경 설정

## chroot 종료 및 최종 환경 설정

/mnt/hdc1/remaster/Knoppix.build/Knoppix.Master /KNOPPIX.CUSTOM/boot/isolinux/isolinux.cfg을 수정해서 부팅할 때 cheat code lang을 ko로 전환하자. 여기서 설정해주는 cheat code는 쉘 변수 LANG에 반영된다.

``` 
 lang=ko
```

GIMP 등을 이용해서 knoppix의 바탕화면을 수정한다. knoppix.png

편집기로 index.html 파일을 수정한다. index.html

## CD 이미지 굽기

## 참고

[KnoppixKo37](http://debianusers.org/DebianWiki/wiki.php/KnoppixKo37)천명권, knoppix 3.7 한글화

[KnoppixCd](http://debianusers.org/DebianWiki/wiki.php/KnoppixCd)천명권, 하드디스크 마운트 준비

[KnoppixKo](http://debianusers.org/DebianWiki/wiki.php/KnoppixKo)천명권, 한글 패키지를 위한 공간 만들기

[KnoppixAddPackagesforHangul](http://debianusers.org/DebianWiki/wiki.php/KnoppixAddPackagesforHangul)천명권, 한글 패키지 설치하기

[KnoppixKo](http://debianusers.org/DebianWiki/wiki.php/KnoppixKo)천명권, 한글관련 설정, cd 이미지 생성

[Knoppix.net, Knoppix Remastering Howto](http://www.knoppix.net/wiki/Knoppix_Remastering_Howto)

[Kyle Rankin, Knoppix Hacks, O'Reilly](http://www.oreilly.com/catalog/knoppixhks/index.html)

## 커맨트

이 문서에 대한 조언을 부탁드립니다.

-----
