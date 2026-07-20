---
layout: post
title: "Knoppix Cheat Code"
info: "KLDP Wiki에 옮겨 두었던 Knoppix 부트 치트코드 번역 문서"
tech: "Linux, Knoppix, Boot Options"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/CheatCode"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 옮겨 두었던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  - 원문 : <http://www.knoppix.net/wiki/Cheat_code>
  - 번역 : 신재훈([GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) : gunsmoke.shin at gmail.com)  

## 소개

까다로운 하드웨어에서 크노픽스가 동작하도록 크노픽스에 옵션을 전달하는데 **치트코드**를 사용한다. 부트 화면에서 치트코드를 입력하고 엔터 키를 누른다. "커널 옵션 옵션 옵션 ..." 형식으로 입력하며 통상적으로 "kernel"에는 "**knoppix**"를 사용한다. 엔터 키를 누르기 전 치트코드는 하나 이상 입력 가능하다. 어떤 옵션은 값을 수반한다는 점을 유념하라.

**예:**

```
    knoppix xvrefresh=60 noscsi floppyconfig
```

## 옵션

**`lang=bg|be|ch|cn|cs|cz|da|de|dk|es|fi|fr|ie|it|ja|nl|pl|ru|sk|tr|tw|uk|us|ko`**

언어/키보드를 지정한다. [여기(iso639표준)](http://www.w3.org/WAI/ER/IG/ert/iso639.htm)를 클릭하면 두문자 코드의 의미를 확인할 수 있다. 예를 들어 "knoppix lang=us"는 언어/키보드를 영어로 변경한다. 언어/키보드를 변경하지 않으면 기본적으로 기본 부트 이미지에서 키보드 레이아웃을 독일어로 설정하여 부팅한다. 필요하다면 [독일어 키보드 레이아웃](http://en.wikipedia.org/wiki/International_keyboard_layouts#Germany_and_Austria_.28but_not_Switzerland.29)을 출력해서 참고하라.

  - 역주1 : 크노픽스 한글 프로젝트(knoppixko.kldp.net) 역시 iso639표준을 따르고 있다.
  - 역주2 : 공식적으로 배포하는 크노픽스는 ko를 지원하지 않는다. 크노픽스 한글은 기본적으로 한글 환경으로 부팅하므로 별도의 치트코드를 사용할 필요가 없다.  

**`keyboard=us`**

콘솔 키보드만 지정한다.

**`xkeyboard=us`**

X 키보드를 지정한다.

**`atapicd`**

IDE CD롬에 대해 SCSI 에뮬레이션을 사용하지 않는다. - 크노픽스 3.4 이후 버전에 사용

**`desktop=fluxbox|icewm|larswm|twm|wmaker|xfce`**

KDE 대신 지정한 데스크탑 관리자를 사용한다.

**`screen=1280x1024`**

지정한 X 스크린 해상도를 사용한다.

**`xvrefresh=60 혹은 vsync=60`**

X 수직 주사율을 혹은 kHz로 지정한다.

**`xhrefresh=80 or hsync=80`**

X 수평 주사율을 80 kHz로 지정한다.

**`xserver=[XFree86](https://wiki.kldp.org/wiki.php/XFree86)|XF86_SVGA`**

지정한 X 서버를 사용한다.

**`xmodule=ati|radeon|fbdev|vesa|savage|s3|nv|i810|mga|svga|tseng`**

지정한 XFree4 모듈을 사용한다.

**`wheelmouse`**

휠마우스인 경우 사용한다. - 2003.4.15 이후 필요치 않다.

**`nowheelmouse`**

일반적인 PS/2 마우스인 경우 사용한다. - 2003.4.15 이후 필요치 않다.

**`0`**

런레벨 0, 시스템종료

**`1`**

런레벨 1, 텍스트 모드, 단일 사용자

**`2`**

런레벨 2, 텍스트 모드

**`3`**

런레벨 3, 텍스트 모드

**`4`**

런레벨 4, 텍스트 모드

**`5`**

런레벨 5, 그래픽 모드, 표준

**`6`**

런레벨 6, 재부팅

**`myconfig=scan` 또는 `floppyconfig` 또는 `floppyconf`** (최근 버전)

플로피 디스켓에서 **knoppix.sh**를 실행한다. "floppyconfig" 옵션은 자동 설정 이후 시스템을 재설정하거나 플로피 디스켓을 마운트하고 플로피 디스켓의 루트 디렉토리에서 **knoppix.sh**라는 본쉘스크립트를 실행하여 자신만의 설정 파일을 설치한다. 이러한 설정 플로피 디스켓을 생성하기 위한 GUI 도구가 "saveconfig"이다.(KDE 메뉴 "KNOPPIX"에 saveconfig가 있지만 스스로 쉘스크립트를 제작하는 숙련된 사용자는 직접 손쉽게 해볼 수도 있다.) 네트워크, 그래픽 설정 내용은 **config.tbz**에 저장된다. 만일 CD의 KNOPPIX 디렉토리 최상층에 knoppix.sh 파일이 위치한다면 시작시 실행될 것이다. 이 기능을 활용하면 압축된 파일 시스템 KNOPPIX/KNOPPIX에는 일절 손대지 않더라도 쉽게 크노픽스를 변형할 수 있다.

**`myconf=/dev/sda1`**

파티션에서 knoppix.sh를 실행한다. - 크노픽스 3.4 이후

**`myconf=scan 혹은 config=scan`**

knoppix.sh 자동 검색을 시도한다. - 크노픽스 3.4 이후

**`noapic noagp noapm nodma nomce nofirewire nopcmcia noscsi noswap nousb nosmp noaudio`**

어떤 "no-" 옵션도 없이 부팅할 때 시도하는 하드웨어 자동 감지에 실패하는 경우에는 "knoppix noagp noapm noapic nodma nopcmcia noscsi nousb"처럼 자동 감지 시스템의 중요한 부분을 생략하기 위해 하드웨어 감지 과정 중 일부를 생략한다. noswap 옵션은 시스템에 있는 스왑 파티션에 손대지 않으므로 포렌식 분석에 유용하다.

**`nofstab`**

기본적으로 크노픽스는 하드디스크가 파티션을 포함하고 있는지 알아내려고 검색할 것이다. 하드디스크에 파티션이 있다면 크노픽스는 자동적으로 "/etc/fstab" 파일을 만들어 알맞은 파티션 항목을 채워넣고 "/mnt/hdxx" 마운트 포인트도 생성할 것이다. nofstab 치트코드는 이러한 검색 과정과 /etc/fstab 파일 및 마운트 포인트 생성 과정을 금지한다.

**`nohwsetup`**

하드웨어 감지를 생략한다.(**`hwsetup`**을 실행하지 않는다.)

**`no-hlt`**

hlt 테스트를 수행하지 않는다. 어떤 CPU나 파워 서플라이에서 hlt 테스트는 CPU를 리셋하는 원인이 되기도 하므로 이 옵션을 지정하여 시스템이 hlt 테스트를 무시하고 전력으로 실행하도록 한다. CPU의 발열량을 증가시켜 전원 절전 기능을 무력화시킬 수 있다.

**`pci=bios`**

PCI 컨트롤러가 불량인 경우 사용한다.

**`pci=biosirq`**

BIOS가 강제로 PCI 버스에 IRQ를 할당하는데 사용한다. 동작하지 않는 하드웨어를 되살릴 가능성이 있다. 다루기 힘든 IRQ 충돌에 유용하다. 그러한 문제를 겪고 있는지 알아내려면 **`dmesg`**와 **`cat /proc/pci`** 결과를 확인하라.

**`pci=irqmask=0x0e98`**

PS/2 마우스가 동작하지 않는 노트북에서 이 옵션을 사용해보라.(메인보드 BIOS 결함이 원인일 가능성이 있다.)

**`ide2=0x180 nopcmia`**

PCMCIA-CD로 부팅한다.(트랜스메타 노트북)

**`mem=128M`**

메모리 크기는 메가바이트 단위로 지정하는데, 어떤 보드는 정확한 메모리 크기를 리눅스 커널에 전달하지 못하기도 한다. 이런 문제로 "Panic cannot mount root file system" 메시지가 나타나고 시스템이 중지되기도 한다. 시스템이 128메가바이트 메모리를 보유하고 있다면 문제를 해결하는데 "knoppix mem=128M" 옵션을 사용한다.(반드시 대문자 "M"을 사용해야 함을 주의하라.) "mem=16320K" 같은 방식 또한 허용된다.

**`noeject`**

시스템 종료 후 CD를 꺼내지 않는다.

**`noprompt`**

noeject와 함께 사용하면 특히 유용하다. noprompt를 쓰면 크노픽스는 CD를 꺼내지 않고 키를 누르라고 요청한다. 이 기능은 비교적 최근에 요구되었다. - 2003-09-22 이후

**`nodhcp`**

dhcp 네트워크 브로드캐스트 감지를 생략한다.

**`splash`**

부팅 과정에서 KDE 시작 화면 윗 부분을 보여준다. 언제든 전체 메시지를 보고자 할 때는 ESC를 누를 수 있다. 이 의미를 알 수 없는 메시지를 숨기려고 해 본 적 없는가? - 2003-09-22 이후

**`modules-disk`**

이 치트코드는 추가 모듈이 들어있는 플로피 디스켓(USB 메모리 혹은 유사한 저장장치)을 삽입하게 허용한다. 그렇다. "expert"와 함께 사용하는 것도 가능하지만 그 후에는 자동으로 설정된 내용을 신뢰하지 못하게 된다. - 2003-09-22 이후

**`toram`**

CD를 램에 복사하고 거기에서 실행한다. - 2003-09-05 이후

**`tohd`**

"knoppix tohd=/dev/hda1" 옵션으로 vat와 ext2 파티션에 ["poor mans install"](http://www.knoppix.net/wiki/Poor_Mans_Install)을 수행한다. - 2003-09-22 이후

**`fromhd`**

이 치트코드는 CD 롬을 무시하므로 결국 원본 CD롬과 함께 ["poor mans install"](http://www.knoppix.net/wiki/Poor_Mans_Install)로 부팅할 수 있다. - 2003-09-05 이후. 주의 : 치트코드 "toram"과 "fromhd"는 이제 함께 사용된다. 사용법은 "fromhd=/dev/hda1"이다.

**`boot=/dev/hda1`**

(커널을 메모리에 적재하고 램디스크(minirt.gz)를 실행한 후에) hda1/KNOPPIX/KNOPPIX에서 부팅 과정을 지속한다. 이 옵션은 CD 드라이브를 자유롭게 하는 가장 쉬운 방법이다. 만일 loadlin을 사용해서 부팅하고 하드 드라이브의 loadlin에서 메모리에 적재되는 'linux' 파일과 'minirt.gz' 파일을 가지고 있다면 부팅 과정에 CD마저 필요하지 않다. 단지 CD에 압축되어 있는 내용을 파티션의 루트 디렉토리에 복사하고 loadlin으로 크노픽스를 메모리에 적재한다. 크노픽스 3.4로 fat32 파티션에서 이 옵션의 동작 여부를 확인했다. - 2006-05-20 이후

**`bootfrom=/dev/hda1`**

이미지에 접근하여 이전에 복사해둔 CD 이미지로 부팅한다.(NTFS/ReiserFS에서 부팅 가능함) - 크노픽스 3.4

**`bootfrom=/dev/hda1/KNX.iso`**

이미지에 접근하여 ISO 이미지로 부팅한다. - 크노픽스 3.4 주의 : bootfrom은 파티션/ISO 이미지 마운트 전에 부트 커널이 동일한 크노픽스 시스템에 접근해야할 필요가 있다. 이 기능은 NTFS 파티션에서 poor mans install을 가능하게 하며 ISO 이미지로 직접 부팅 할 수 있게 한다. ISO 파일 이름에 와일드 카드를 사용할 수도 있지만 부팅하려는 ISO 이미지가 유일해야만 한다. /dev/hda1에 KNOPPIX.iso를 하나 가지고 있다면 "bootfrom=/dev/hda1/K*.iso"로 접근 가능하나 이미지가 몇 개 더 있다면 부팅하기 원하는 이미지를 명확히 해야할 필요가 있다.(이 기능은 Fabian Franz에 의해 추가되었다.)

경고 : 크노픽스 3.4 CD의 커널 2.4는 ext3 파일 시스템을 지원하지 않으므로 ISO 이미지는 ext2 파일 시스템에 저장되어 있어야 한다.

**`gmt|utc`**

하드웨어 시간을 GMT/UTC으로 설정한다.

**`tz=Europe/Berlin`**

하드웨어 시간을 Europe/Berlin 시간대로 설정한다.

**`vga=normal`**

비프레임버퍼 모드 X 환경

**`vga=ext`**

50행 텍스트 모드

**`dma`**

모든 IDE 드라이브에 DMA를 활성화한다.

**`home=scan`**

홈 디렉토리를 설정한다. 'scan'은 모든 파티션의 루트에서 "knoppix.img"를 찾을 것이다. 홈 디렉토리를 생성하려면 K 메뉴 -> 크노픽스 -> 설정 -> 고정 홈 디렉토리 생성을 선택한다. 홈 디렉토리를 생성할 때 잘 모른다면 파티션 전체를 사용하지 않도록 주의하라. 다른 방법으로 **`home=/dev/hda1/knoppix.img home=/mnt/hda1/knoppix.img`**를 사용할 수 있다. 만일 USB 메모리를 사용한다면 **`home=/dev/sda1/knoppix.img`**로 사용할 수 있다. 그러나 home=scan 역시 동작할 것이다.

**`blind`**

점자 터미널(Braille-Terminal)을 시작한다.(X 아님)

**`brltty=type,port,table`**

점자 장치(Braille device)에 대한 매개변수. 매개변수 brltty에 대한 더 자세한 정보는 <http://mielke.cc/brltty/guidelines.html에서> 찾을 수 있다.

**`alsa`**

pci 사운드 카드에 대한 alsa를 자동설정한다.

**`alsa=es1938`**

snd-es1938.o 모듈을 사용하는 pci 사운드 카드에 대한 alsa를 설정한다.

**`testcd`**

CD 데이터 무결성 검사를 실시한다. 부팅 중에 크노픽스 CD에서 이상한 소리가 나거나, "cloop read error"와 같은 에러 메시지가 자주 나오며 KDE 데스크탑 프로그램이 무작위로 충돌한다면 아마 CD 이미지에 결함이 있거나 불완전하고, 아니면 CD 레코딩시 잘못된 쓰기 속도나 잘못된 CD가 원인일 것이다. 이는 매우 흔한 오류로 알려져 있다. CD가 괜찮은지 확인하려면 "knoppix testcd"를 입력하여 부팅하고, CD를 쓰기 전에 미러에 있는 이미지와 MD5 검사를 확인해보는 편이 좋다. 또한 KNOPPIX-FAQ를 읽어보기 바란다.

주의 : testcd는 오랜 시간이 걸릴 수 있으며 testcd 검사 실행 중 화면보호기가 시작되기도 한다. 화면보호기를 끄고 계속하려면 Shift나 Ctrl 키를 눌러라, 이 시점에서 시스템을 재부팅하거나 다른 CD를 구워야할 필요는 없다.

**`pnpbios=off`**

PnP 바이오스 초기화를 실시하지 않는다.

**`acpi=off`**

ACPI 바이오스를 완전히 비활성시킨다.

**`knoppix_dir=KNOPPIX`**

CD에서 찾을 디렉토리를 명시한다.

**`knoppix_name=KNOPPIX`**

CD에서 찾을 cloop 파일을 명시한다.

**`-b`**

"응급 모드", 임시 부팅으로 가상 터미널 하나를 제외하고 하드웨어 감지가 거의 이루어지지 않는다. 루트 비밀번호 프롬프트에서 엔터 키를 누르고 명령 입력을 시작한다. IDE 장치에 대한 fdisk, 다른 파티션 부팅 활성화, DD 기능, 작업이 끝난 뒤 매우 빠른 재부팅을 계획한다면 바람직하다. 실제로 안전하게 Alt-SysRQ-B 할 수 있다. 제대로 종료되었는지에 대한 걱정 없이 즉시 재부팅할 수 있는데, 스왑을 포함해서 읽고 쓸 수 있도록 마운트되어 있는 것이 전혀 없기 때문이다. 다른 리눅스 배포판에서도 동작한다.

## 커널

커널과 커널 레이블에 대한 완전한 목록을 보려면 CD의 isolinux.cfg를 확인하라.

**`knoppix 혹은 linux`**

기본 설정

    # cat /proc/cmdline
    ramdisk_size=100000 init=/etc/init lang=us apm=power-off vga=791
    initrd=minirt.gz nomce quiet BOOT_IMAGE=knoppix BOOT_IMAGE=linux

**`knoppix26 혹은 linux26`**

크노픽스 3.4에서 커널 2.6으로 부팅할 때 사용

**`knoppix-txt`**

시작시 프레임버퍼 비활성화

    # cat /proc/cmdline
    ramdisk_size=100000 init=/etc/init lang=us apm=power-off vga=normal
    initrd=minirt.gz nomce quiet BOOT_IMAGE=knoppix BOOT_IMAGE=linux

**`fb1280x1024 혹은 fb1024x768 혹은 fb800x600`**

고정 프레임버퍼 사용

    # cat /proc/cmdline
    ramdisk_size=100000 init=/etc/init lang=us apm=power-off vga=794
    xmodule=fbdev initrd=minirt.gz nomce quiet BOOT_IMAGE=knoppix BOOT_IMAGE=linux

**`failsafe`**

하드웨어 감지 기능 없이 부팅

    # cat /proc/cmdline                                              
    ramdisk_size=100000 init=/etc/init lang=us vga=normal atapicd
    nosound noapic noacpi pnpbios=off acpi=off nofstab noscsi 
    nodma noapm nousb nopcmcia nofirewire noagp nomce nodhcp 
    xmodule=vesa initrd=minirt.gz BOOT_IMAGE=knoppix BOOT_IMAGE=linux

**`expert`**

전문가를 위한 대화식 설정이 이루어진다. expert 모드는 플로피 디스켓(ext2 혹은 vfat)에서 추가적인 커널 모듈을 올리기 위해 매우 간단하지만 아직까지 잘 시험되지 않은 인터페이스와 mouse/keyboard/soundcard/xserver에 대한 대화식 설정을 제공한다. expert 모드는 "knoppix"와 같은 부트 옵션을 제공한다.

    # cat /proc/cmdline                                              
    ramdisk_size=100000 init=/etc/init lang=us apm=power-off vga=791
    initrd=minirt.gz nomce BOOT_IMAGE=expert BOOT_IMAGE=linux

**`expert26`**

앞내용과 동일한데 2.6 커널에만 해당한다. - 크노픽스 3.4

**`memtest`**

리눅스 대신 memtest86을 실행한다. - 크노픽스 3.4

**`debug`**

부팅과 종료 과정 중 다양한 단계에서 정지한다. exit라고 입력하면 다음 단계로 넘어간다.

    # cat /proc/cmdline
    ramdisk_size=100000 init=/etc/init lang=us apm=power-off
    vga=normal initrd=minirt.gz debug BOOT_IMAGE=debug BOOT_IMAGE=linux

**`userdef`**

변형된 크노픽스를 사용하고 있다면 유용한 커널 별칭. 더 자세한 정보가 필요하면 "man knoppix-customize"라고 입력한다. 매우 실험적인 기능이다.

## 팁

크노픽스로 부팅할 수 없다면(화면이 까맣게 됨, 커널 패닉 메시지가 나옴, 화면이 반짝임, 기본 쉘만 나옴, 단순히 부팅중 크노픽스가 멈춰버림, 등) 순서대로 다음 부트 옵션을 시도해본다.

1\. **`boot: knoppix vga=0`**

2\. **`boot: knoppix acpi=off pnpbios=off noapic noapm`** 노트북에서 유용하다.

3\. **`boot: knoppix vga=0 debug -b 3`** 부팅 과정에서 여러 단계별로 크노픽스를 중지하고자 할 때 이 부트 명령을 사용한다. 다음 단계로 진행하기 위해 각 쉘 프롬프트에서 'exit'라고 입력하기만 하면 된다. 'exit'라고 입력했는데 아무 일도 일어나지 않는다면 마지막 단계까지 진행했다는 사실을 알게될 것이다. 너무 먼 단계까지 진행했다면 그래픽 모드로 전환하기 위해 'init 5'를 입력한다.

4\. **`boot: failsafe debug -b 3`** 하드웨어 감지 기능을 끈다는 점을 제외하면 앞 부트 명령과 동일하다.

여전히 문제가 생긴다면 [Hardware & Booting](http://www.knoppix.net/forum/viewforum.php?f=9) 포럼에 글을 올려본다. 어떤 부트 옵션을 사용했는지, 어떤 부팅 단계까지 진행할 수 있었는지 밝혀야 한다.

  - 역주3 : 크노픽스 한글은 [노트북에서 Knoppix 사용하기](http://kldp.org/node/54879)에 글을 써주기 바란다.  

차후 문제 해결에 대한 정보

부트 옵션 대부분은 부팅 과정 중 다양한 프로그램과 스크립트에서 해석되는데 대략 다음의 순서와 같다.

  - 부트로더 isolinux  

  - 리눅스 커널  

  - /cdrom/boot/isolinux/miniroot.gz에서 찾을 수 있는 /linuxrc  

  - /etc/init.d/knoppix-autoconfig  

  - /etc/init.d/xsession  

  - /usr/sbin/mkxf86config  

  - /etc/init.d/knoppix-halt  

  - /etc/init.d/knoppix-reboot  

커널에 넘겨주는 부트 매개변수에 대한 더 많은 정보는 'man boot'와 'man bootparam'을 확인하라.
