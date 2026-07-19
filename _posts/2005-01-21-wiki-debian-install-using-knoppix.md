---
layout: post
title: "KNOPPIX를 이용한 Debian 설치"
info: "KLDP Wiki에 작성했던 KNOPPIX 기반 Debian 설치 문서"
tech: "Linux, Debian, KNOPPIX"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/DebianInstallUsingKnoppix"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성했던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

![userfriendly.gif]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/userfriendly.gif" | relative_url }})

UserFriendly의 그렉처럼 ‘RedHat을 안 깔려면 다 집어쳐\!’라는 사고방식에 길들여져 왔던 대다수의 국내 리눅스 유저들을 위하여 마이크가 주장하는 데비안을 쉽게 설치하는 방법에 대해서 소개합니다.

필자 : [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 신재훈 (gunsmoke.shin at gmail.com)

KNOPPIX로 최신의 데비안 시스템을 설치하는 과정 자체는 어렵지 않습니다. 그러나 설치 이후, 몇몇 필수적인 설정 과정들을 일일이 Howto문서를 찾아가면서 풀어나가는 것은 처음 데비안을 접하는 분들에게 쉬운 일이 아닐 것이라 생각됩니다. 이러한 과정들을 다른 문서들을 참고하여 이곳에 정리합니다.

## KNOPPIX로 데비안리눅스를 설치하는 것의 장점

1\. KNOPPIX가 대부분의 하드웨어를 자동으로 인식하기 때문에 하드웨어 문제로 고생할 필요가 없다. 특별히 신경써야할 부분이라고 하면 파티션 설정 정도가 될 것이다.

## 데비안 시스템 설치

1\. KNOPPIX 이미지를 다운로드해서 CD로 굽는다. 한글화된 KNOPPIX 이미지를 다운로드하면 한글로케일 설정이 매우 편리하다. 한글화된 이미지는 다음의 링크에서 구할 수 있다.

<http://project.oss.or.kr/project/patch/view.html?num=52&idx=13>

2\. KNOPPIX CD로 부팅한다.

![screenshot.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/screenshot.jpg" | relative_url }})

3\. knoppix-installer 실행, knoppix-installer-latest-web을 사용하면 최신의 인스톨러를 활용할 수 있다.

    # knoppix-installer-latest-web
    ...

4\. OK버튼을 클릭한다.

![knoinstall01.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall01.jpg" | relative_url }})

5\. 설치 과정에서 ‘1번 설치를 위한 설정’을 선택한다.

![knoinstall02.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall02.jpg" | relative_url }})

6\. 시스템 형식에서 ‘beginner: 하드웨어를 자동 설정하는 복수 사용자용 시스템’을 선택한다.

![knoinstall03.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall03.jpg" | relative_url }})

7\. KNOPPIX를 설치할 파티션을 선택한다. 필자의 /dev/hdb1은 이전에 레드햇 리눅스를 설치해서 사용하던 ext3 형식의 파티션이다. 이곳에 ext3 형식으로 KNOPPIX가 설치될 것이다.

![knoinstall04.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall04.jpg" | relative_url }})

8\. root 계정 사용자의 성명을 입력한다.

![knoinstall05.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall05.jpg" | relative_url }})

9\. root 계정 외의 일반 사용자 계정을 추가한다.

![knoinstall06.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall06.jpg" | relative_url }})

10\. 앞 과정에서 추가시킨 사용자의 패스워드를 입력한다.

![knoinstall07.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall07.jpg" | relative_url }})

11\. root 사용자의 패스워드를 입력한다.

![knoinstall08.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall08.jpg" | relative_url }})

12\. 호스트명을 입력한다.

![knoinstall09.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall09.jpg" | relative_url }})

13\. 부트로더(LILO)가 설치될 영역을 선택한다. 필자는 WindowsXP와의 멀티부팅을 위해 MBR 영역에 부트로더를 설치하였다.

![knoinstall10.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall10.jpg" | relative_url }})

14\. 설치 준비가 모두 끝났다. ‘2. 설치시작’ 메뉴를 선택한다.

![knoinstall11.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall11.jpg" | relative_url }})

15\. 설치에 앞서 간단히 요약된 설치 정보를 확인할 수 있다.

![knoinstall12.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall12.jpg" | relative_url }})

16\. KNOPPIX가 설치될 파티션 포맷이 끝나고 파일을 하드디스크로 복사한다.

![knoinstall13.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall13.jpg" | relative_url }})

17\. KNOPPIX 부팅 디스켓을 제작한다. NO 버튼을 클릭하면 이 과정을 생략한다.

![knoinstall14.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall14.jpg" | relative_url }})

18\. 설치 과정이 모두 끝났다. OK 버튼을 클릭하면 시스템이 재부팅된다. CD를 제거한 뒤에 하드디스크로 설치된 KNOPPIX로 부팅이 가능할 것이다.

![knoinstall15.jpg]({{ "/assets/img/kldp-wiki/debian-install-using-knoppix/knoinstall15.jpg" | relative_url }})

Knoppix에서 제공하는 부트로더는 lilo이므로 기존에 다른 리눅스가 설치되어 있다면 부트로더(grub)와 충돌할 가능성이 있다. 따라서 부팅시 수동으로 설정하여 부팅해야 한다. (부팅후에는 grub로 부트로더를 전환할 계획이므로 일단 부팅하는 것이 우선이다.)

부팅에 성공했다면 apt-get update 명령을 실행하여 최신의 데비안 패키지로 업데이트해준다.

/etc/apt/source.list를 국내 미러로 바꾸어준다. ftp.sayclub.com/pub/Debian 등으로 설정해둘 필요가 있다. 필자의 source.list이다.

    # Stable
    deb ftp://ftp.sayclub.com/pub/debian stable main contrib non-free

    # Sources
    deb-src ftp://ftp.sayclub.com/pub/debian stable main contrib non-free

    # Testing
    deb ftp://ftp.sayclub.com/pub/debian testing main contrib non-free

## 부트로더 grub로 전환하기

최신의 grub 패키지를 소스트리에서 받아온다.

    apt-get install grub

grub를 첫번째 하드디스크에 설치한다.

    grub-install /dev/hda

설정 파일인 menu.lst 파일을 생성한다. **이 때 나오는 메시지에서 반드시 Y를 선택해야 한다.**

    update-grub 

/boot/grub/menu.lst 편집한다. 리눅스 부팅과 관련하여 기본적인 설정 내용은 자동으로 생성되므로 Windows 등 다른 운영체제로 부팅하기 위한 설정 내용만 추가하면 될 것이다.

    title           WindowsXP
    rootnoverify (hd0,0)
    chainloader +1

grub-install를 다시 한번 실행해주어 설정 내용을 적용한다.

    grub-install /dev/hda 

다음과 같이 스플래시를 이용하여 grub의 이미지를 설정해주는 것도 가능하다.

    splashimage=(hd1,0)/boot/grub/debian_cooleye.xpm.gz
    foreground=2222FF
    background=000000

**debianusers의 <http://debianusers.org/moniwiki/wiki.php/grub부트매니저로바꾸기> 문서를 참고하여 스플래시를 바꾸어보기 바란다.**

## 한글 로케일 전환하기

**한글화된 knoppix를 이용해서 설치하는 경우, 이미 로케일이 한글로 잡혀있는 것을 확인할 수 있다. 따라서 로케일을 전환할 필요가 없다.**

/etc/locale.gen 파일 편집

    ko_KR.EUC-KR EUC-KR
    ko_KR.UTF-8 UTF-8

/usr/sbin/locale-gen을 실행하면 locale이 생성된다. /etc/environment 파일에 LANG=ko\_KR.EUC-KR등의 줄을 넣어주면 기본 locale을 고를 수 있다.

/usr/bin/locale로 변경된 locale을 확인할 수 있다.

dpkg-reconfigure locales를 이용하면 로케일 설정을 자동으로 해결할 수 있다.

## 한글입력기 nabi 설치

nabi의 최신 패키지를 소스트리로부터 받아온다.

    apt-get install nabi

로케일을 변경하지 않은 상태에서 nabi를 실행할 수 없다. 반드시 한글 로케일로 전환할 것.

    # locale
    LANG=ko_KR.eucKR
    LC_CTYPE="ko_KR.eucKR"
    LC_NUMERIC="ko_KR.eucKR"
    LC_TIME="ko_KR.eucKR"
    LC_COLLATE="ko_KR.eucKR"
    LC_MONETARY="ko_KR.eucKR"
    LC_MESSAGES="ko_KR.eucKR"
    LC_PAPER="ko_KR.eucKR"
    LC_NAME="ko_KR.eucKR"
    LC_ADDRESS="ko_KR.eucKR"
    LC_TELEPHONE="ko_KR.eucKR"
    LC_MEASUREMENT="ko_KR.eucKR"
    LC_IDENTIFICATION="ko_KR.eucKR"
    LC_ALL=
    #

/etc/environment 파일을 수정한다. (.xsession 파일이나 .xinitrc 파일에 로케일과 관련된 설정을 해버리면 gdm이나 kdm을 통해 로그인하는 과정에서 문제가 발생할 수 있다.)

    LANGUAGE=ko_KR.eucKR
    LANG=ko_KR.eucKR

    export LANG=”ko_KR.eucKR”
    export LC_ALL=”ko_KR.eucKR”
    export XMODIFIERS=”@im=nabi”

    export GTK_IM_MODULE=hangul2
    export G_BROKEN_FILENAMES=1
    export GDK_USE_XFT=1
    export XIM_PROGRAM=/usr/bin/nabi
    xmodmap ~/.Xmodmap
    nabi&

## 은글꼴 설치하기

Sarge나 sid의 소스리스트를 사용한다면 apt-get install ttf-unfonts로 은글꼴을 간편하게 설치할 수 있다. 상황이 여의치 않을 경우 다음과 같이 한다.

/usr/share/fonts 이하에 적당한 디렉토리를 생성한다.

\*.ttf 은글꼴을 모두 복사한다.

xfs를 재시작한다.

    /etc/init.d/xfs restart

이후 KDE제어판, GNOME 제어판 등에서 글꼴을 알맞게 변경하면 은글꼴을 바로 사용할 수 있다.

## 데스크탑을 GNOME으로 전환하기

데스크탑 환경 GNOME의 패키지 gnome-environment를 설치한다.

    apt-get install gnome-environment

KNOPPIX의 기본 데스크탑 환경은 KDE로서 로그인 프로그램 역시 kdm을 사용하고 있다. GNOME 전용의 gdm을 사용하기 위해 다음과 같은 명령을 실행한다.

    apt-get gdm

gdm을 설치하면서 기본 로그인 프로그램을 kdm이나 gdm으로 선택하라는 메시지가 나타날 것이다. gdm을 선택하는 것을 잊지 말것\!

**gdm은 기본 설정 값으로 root 로그인을 허락하지 않고 있다. 해결 방법에 대해서는 직접 gdm과 관련한 문서를 참고하기 바란다.**

## bttv 모듈을 이용하여 TV시청하기

이미 knoppix가 대부분의 하드웨어 모듈을 잡아주고 있기 때문에 lsmod 명령을 내리면 기본 옵션 상태로 bttv 모듈이 잡혀있는 것을 확인할 수 있다.

rmmod로 bttv 모듈을 제거한 다음 modprobe card=44 tuner=10이라는 옵션을 직접 입력하면 올바르게 동작하는 것을 확인할 수 있었다.

문제는 tuner와 관련된 설정인데 redhat 기반의 배포판처럼 /etc/modules.conf를 편집한다고 해서 될 일이 아니었다.

knoppix는 검색한 모듈을 커널버전에 따라 /etc/modules 파일이 참조해서 부팅한다. /etc/modules-2.4.27 혹은 /etc/modules-2.6.7 중 하나를 선택하여 부팅하는 것을 확인할 수 있었다.

따라서 /etc/modules-2.6.7 파일과 /etc/modules 파일 양쪽을 모두 다 편집했다.

    …
    bttv card=44
    tuner type=10
    …

## 파이어폭스 설치

소스리스트로부터 firefox 1.0를 설치할 수 있다.

    apt-get install mozilla-firefox

## nvidia 드라이버 설정하기

먼저 커널 컴파일부터 한다.

커널 컴파일 방법

    # apt-get install kernel-image-2.6.10-1-686

    .....

    The following extra packages will be installed:

    initrd-tools Suggested packages:

    kernel-doc-2.6.10 kernel-source-2.6.10 The following NEW packages will be installed:

    kernel-image-2.6.10-1-686 The following packages will be upgraded:

    initrd-tools

    1 upgraded, 1 newly installed, 0 to remove and 886 not upgraded. Need to get 16.1MB of archives. After unpacking 46.9MB of additional disk space will be used. Do you want to continue? Y/nY  

    .....

    As a reminder, in order to configure LILO, you need to add an 'initrd=/initrd.img' to the image=/vmlinuz stanza of your /etc/lilo.conf  

    I repeat, You need to configure your boot loader -- please read your bootloader documentation for details on how to add initrd images.

    If you have already done so, and you wish to get rid of this message, please put

    "do_initrd = Yes" in /etc/kernel-img.conf. Note that this is optional, but if you do not, you will continue to see this message whenever you install a kernel image using initrd. Do you want to stop now? Y/nn  

    .....

    /initrd.img does not exist. Installing from scratch, eh? Or maybe you don't want a symbolic link here. Hmm? Lets See. I notice that you do not have initrd.img symbolic link. I can create one for you, and it shall be updated by newer kernel image packages. This is useful if you use a boot loader like lilo. Do you want me to create a link from /boot/initrd.img-2.6.10-1-686 to initrd.img?Yn y  

    .....

    You already have a LILO configuration in /etc/lilo.conf Install a boot block using the existing /etc/lilo.conf? Yesy

    .....

    Testing successful. Installing the partition boot sector... Installation successful.

    root@LostTemple:\~\#

    .....

    root@LostTemple:\~\# apt-cache search kernel-headers-2.6.10-1-686

    .....

    Need to get 3504kB of archives. After unpacking 45.0MB of additional disk space will be used. Do you want to continue? Y/n

    .....

    

    Setting up kernel-headers-2.6.10-1-686 (2.6.10-3) ... root@LostTemple:\~\#

    .....

    root@LostTemple:\~\# vi /boot/grub/menu.lst

    title Debian GNU/Linux, kernel 2.6.10-1-686 root (hd1,0) kernel /boot/vmlinuz root=/dev/hdb1 ro initrd /boot/initrd.img savedefault boot

    ...

    root@LostTemple:\~\# grub-install /dev/hda

  

recovery모드를 만들어서 gdm이 아닌 콘솔모드로 부팅

    sh NVIDIA....sh 실행

nvidia 모듈이 잡혔으면 modprobe nvidia로 nvidia 모듈이 올라오는 것을 확인한다.

/etc/modules, /etc/modules...2.6.10-1-686에 nvidia 모듈 추가 (특별히 다른 옵션은 필요 없음)

    # XFree86 -configure (XF86Config.new 파일을 만들 것이다.) 
    # cp /etc/X11/XF86Config /etc/X11/XF86Config.original 
    # cp /XF86Config.original /etc/X11/XF86Config
    # vi /etc/init.d/knoppix-autoconfig

다음을 주석처리한다.

    #KNOPPIX automatic [XFree86](https://wiki.kldp.org/wiki.php/XFree86) Setup 
    #if \! checkbootparam "nomkxf86config"; then 
    #  -x /usr/sbin/mkxf86config  && /usr/sbin/mkxf86config 
    #fi

마우스가 제대로 잡히지 않는다면 mouseconig를 실행해준다. 

    # mouseconfig

부팅한 다음, 해상도를 제대로 잡아주면 끝.

## 무선LAN설정

삼성 센스P10모델, knoppix가 부팅하면서 이미 무선랜카드의 모듈은 자동으로 잡아둔 상태.

    root@1[knoppix]# iwconfig
    lo        no wireless extensions.

    eth0      IEEE 802.11b  ESSID:""  Nickname:"HERMES I"
              Mode:Managed  Frequency:2.432 GHz  Access Point: 00:30:0D:17:48:1C
              Bit Rate:11 Mb/s   Sensitivity:1/3
              Retry limit:4   RTS thr:off   Fragment thr:off
              Encryption key:off
              Power Management:off
              Link Quality=30/92  Signal level=-66 dBm  Noise level=-96 dBm
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0

    eth1      no wireless extensions.

    root@1[knoppix]#

무선AP의 essid를 입력해준다.

    root@1[knoppix]# iwconfig eth0 mode Ad-hoc essid ns2200

다시한번 무선랜 인터페이스를 확인한다.

    root@1[knoppix]# iwconfig
    lo        no wireless extensions.

    eth0      IEEE 802.11b  ESSID:"ns2200"  Nickname:"HERMES I"
              Mode:Ad-Hoc  Frequency:2.432 GHz  Cell: 00:30:0D:17:48:1C
              Bit Rate:11 Mb/s   Sensitivity:1/3
              Retry limit:4   RTS thr:off   Fragment thr:off
              Encryption key:off
              Power Management:off
              Link Quality:0  Signal level:0  Noise level:0
              Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
              Tx excessive retries:0  Invalid misc:0   Missed beacon:0

    eth1      no wireless extensions.

    root@1[knoppix]#

무선랜카드에 ip주소 정보를 입력한다.

    root@1[knoppix]# ifconfig
    lo        Link encap:Local Loopback
              inet addr:127.0.0.1  Mask:255.0.0.0
              UP LOOPBACK RUNNING  MTU:16436  Metric:1
              RX packets:12 errors:0 dropped:0 overruns:0 frame:0
              TX packets:12 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:0
              RX bytes:600 (600.0 b)  TX bytes:600 (600.0 b)

    root@1[knoppix]# ifconfig eth0 192.168.0.10
    root@1[knoppix]# ifconfig
    eth0      Link encap:Ethernet  HWaddr 00:02:2D:6D:13:90
              inet addr:192.168.0.10  Bcast:192.168.0.255  Mask:255.255.255.0
              UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
              RX packets:486 errors:0 dropped:0 overruns:0 frame:0
              TX packets:7 errors:1 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:1000
              RX bytes:26334 (25.7 KiB)  TX bytes:2772 (2.7 KiB)
              Interrupt:11 Base address:0x100

    lo        Link encap:Local Loopback
              inet addr:127.0.0.1  Mask:255.0.0.0
              UP LOOPBACK RUNNING  MTU:16436  Metric:1
              RX packets:12 errors:0 dropped:0 overruns:0 frame:0
              TX packets:12 errors:0 dropped:0 overruns:0 carrier:0
              collisions:0 txqueuelen:0
              RX bytes:600 (600.0 b)  TX bytes:600 (600.0 b)

    root@1[knoppix]#

게이트웨이 주소를 추가하여 라우팅 테이블을 설정한다.

    root@1[knoppix]# route add default gw 192.168.0.1
    root@1[knoppix]# route
    Kernel IP routing table
    Destination     Gateway         Genmask         Flags Metric Ref    Use Iface
    192.168.0.0     *               255.255.255.0   U     0      0        0 eth0
    default         192.168.0.1     0.0.0.0         UG    0      0        0 eth0
    root@1[knoppix]#

게이트웨이까지 ping을 날려보고 확인한 뒤에 DNS 정보를 /etc/resolv.conf에 추가시켜주면 네트워크 환경 설정 끝.

**KNOPPIX의 Wavelan configuration을 활용해서 쉽게 설정할 수 있다. 사용법에 대해서는 좀 더 연구가 필요할 듯.**

## 참고문헌

권순선 KNOPPIX로 데비안 시스템 설치하기  
<http://bbs.kldp.org/viewtopic.phpt=38582\&highlight=knoppix>
[FixMe](https://wiki.kldp.org/wiki.php/FixMe) (사이트가 변경되어 링크 위치의 문서가 없어짐. 어디로 가 있을까요?)

[DeleteMe](https://wiki.kldp.org/wiki.php/DeleteMe) 아래 3곳의 주소인 debianusers 사이트가 없어짐....

debianusers grub 부트 매니저로 바꾸기 (빠른 길잡이)  
<http://debianusers.org/DebianWiki/wiki.php/grub부트매니저로바꾸기>

한정훈 grub에 바탕그림깔기  
<http://debianusers.org/DebianWiki/wiki.php/GRUB에바탕그림깔기>

debianusers 한글설정의 기본 개념  
<http://debianusers.org/DebianWiki/wiki.php/한글설정의기본개념>

## 커멘트

이 문서에 대한 조언을 부탁드립니다.

-----

방금 '10 nvidia 드라이버 설정하기'를 정리하는 도중에 웹브라우저를 닫아버리는 엄청난 실수를 저질렀습니다. 정신적 데미지로 더이상 문서작업을 할 수가 없네요... 나중에 정리하겠습니다.ㅠㅠ -- [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) 2005-01-21

-----

이 문서를 따라서 했는데요. 다시 부팅하면 /etc/environment 내용이 새로 바뀌더군요. 그래서 /etc/init.d/knoppix-autoconfig 내용중에 /etc/environment를 지우고 새로 생성하는 부분을 코멘트 처리했는데 nabi가 다운되고 그러네요. 커널 옵션 중에 lang=en를 지우고 부팅했는데... 다른 분들은 잘 되는건가요? -- showise 2005-02-02
