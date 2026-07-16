---
layout: post
title: "Knoppix Hardware FAQ"
info: "KLDP Wiki에 옮겨 두었던 Knoppix 하드웨어 FAQ 번역 문서"
tech: "Linux, Knoppix, Hardware, FAQ"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/HardwareFAQ"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 옮겨 두었던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  - 원문 : <http://www.knoppix.net/wiki/Hardware_FAQ>
  - 번역 : 신재훈([GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) : gunsmoke.shin at gmail.com)  

#### Q: 프린터는 어떻게 설정하나요?

A: 크노픽스 메뉴의 프린터 설정을 클릭하면 프린터 설정 마법사가 실행됩니다.

#### Q: 휠마우스의 휠을 사용하기 위해서 어떻게 해야하나요?

A: 부트 프롬프트에서 다음과 같이 입력합니다.

    knoppix wheelmouse

안타깝게도 휠마우스는 자동감지되지 않으며 휠마우스의 프로토콜은 표준 ps/2 프로토콜과 호환되지 않습니다. 그러므로 일반적인 ps/2 프로토콜을(휠마우스 지원 없이) 그대로 사용하는 것이 안전합니다.

#### Q: 크노픽스를 시스템에 설치한 후, 휠마우스를 사용하는 방법을 찾고 있습니다. 어떻게 해야하죠? 크노픽스 CD로 부팅했을때에는 "knoppix wheelmouse"을 적용해서 휠마우스가 정상적으로 작동하고 있습니다.

A: 두가지 방법이 있습니다. (**이 방법은 아직 테스트되지 않았습니다.**):

  - "/etc/X11/XF86Config-4"를 편집합니다. (편집전에 미리 백업해두기 바랍니다.)
  - Input Device 항목에 다음의 행을 추가합니다.

``` 
 Option    "Protocol"  "IMPS/2"
 Option    "ZAxismapping"    "4  5"
 Option    "Buttons"     "5"
```

  - 만일 다른 마우스 프로토콜과 관련된 행이 있다면 이를 삭제해야 합니다. 마우스 프로토콜과 관련된 항목으로는 serial, PS/2, usb-Mice가 있습니다. 올바른 항목을 찾아야 합니다.  
  - "/etc/lilo.conf"를 수정합니다.
  - 부팅 정보를 나타내는 행에 "wheelmouse" 옵션을 추가합니다. (여러 행에 걸쳐 부팅 매개변수가 있을 것입니다.)  
  - 루트 권한으로 다음의 명령을 실행합니다. 에러 메시지가 없기를 기대합니다.

    knoppix# lilo -v

#### Q: Microsoft Wireless Intelli Mouse explorer (Optical, USB)를 사용하고 있습니다. 마우스 포인터가 움직이지 않는군요\!

A: 루트 콘솔을 하나 열고(Ctrl + Alt + F2) 다음을 입력합니다.

    knoppix# modprobe -r usbmouse
    knoppix# modprobe hid

Ctlr + Alt + F5 키를 눌러 KDE로 돌아옵니다.

#### Q: 다이얼업 접속을 사용하고자 하는데 가지고 있는게 윈모뎀 뿐이군요\!

A: 안타깝게도 몇몇 값싼 모뎀은 대부분의 기능을 소프트웨어적으로 구현하고 있습니다. 리눅스는 이러한 '얇팍한'모뎀을 거의 지원하지 않고 있습니다. 따라서 다른 모뎀을 찾아보는 것이 현명할 것입니다.

**역주 : win modem을 thin modem으로 빗대어 표현하고 있습니다.**

제대로된 모뎀을 구입하는 것이 어째서 가치있는 일인지 곧 깨닫게 될 것입니다.(리눅스에서 윈모뎀을 인식시키려고 애쓰다보면 알게 될 것입니다.) 윈모뎀의 리눅스 드라이버에 대한 정보는 [linmodems.org](http://www.linmodems.org)를 참고합니다.

#### Q: 그래픽 카드가 잡히지 않습니다\!

A: 아직까지 하드웨어 데이터베이스에 들어있지 않는 최신 그래픽 카드인 것으로 보입니다. 이런 그래픽카드일지라도 리눅스에서 할 수 있는 일반적인 작업들은 여전히 수행할 수 있습니다. 부팅 과정에서 다음과 같이 입력합니다.

``` 
 knoppix xmodule=vesa
```

혹은

``` 
 knoppix xmodule=fbdev
```

그러면 그래픽 가속이 적용되지 않은 초기화된 [XFree86](https://wiki.kldp.org/wiki.php/XFree86) 모드에서 사용할 수 있는 화면이 나타날 것입니다.

2002년 1월 31일 이후에 출시된 크노픽스에서는 부트 옵션으로 knoppix 대신 fb800x600와 같은 프레임버퍼 옵션(특히 오래된 노트북 사용자에게 유용한 옵션입니다.)을 사용할 수 있습니다. 이 옵션은 800x600 해상도의 프레임 버퍼 모드를 사용한다는 것을 의미합니다.

이러한 차선책의 성공 혹은 실패에 상관없이 당신이 PCI ID 정보를 비롯한 그래픽카드에 대한 정보를 크노픽스 개발팀에게 메일로 보내준다면("lspci ; lspci -n" 명령의 결과) 차기 버전에서 신속한 지원이 이루어질 것입니다.

Intel® 82865G와 같은 온보드 칩셋을 사용하는 몇몇 사용자의 경우 공유 메모리 크기와 관련된 문제를 겪을 수 있습니다. 이 때에는 공유 메모리를 8Mb로 지정해야 합니다.(메인보드의 바이오스를 확인하세요.)

#### Q: 내 컴퓨터에 대해 하드웨어 자동 감지 기능이 적용되지 않나봐요. 부팅중에 멈춰버렸습니다. 어떻게 해야하죠?

A: 하드웨어 자동 감지 기능의 일부분을 생략함으로서 문제를 해결할 수 있을 것입니다. "knoppix noscsi" 혹은 "knoppix nopcmcia"와 같이 하드웨어 자동 감지 과정을 지정해 줄 수 있습니다. 만일 이와 같은 문제가 발생한다면 정확한 에러 메시지와 해결 가능한 방안을 <http://www.knopper.net/kontakt/로> 제출해주시기 바랍니다. 정확하게 인식하지 못한 그래픽 카드 문제에서 "lspci ; lspci -n" 명령의 결과가 도움이 되는 경우가 종종 있습니다.

#### Q: PS/2 마우스가 동작하지 않습니다\!

A: 만일 마우스 포인터가 화면에서 엉뚱하게 돌아다닌다면 마우스 프로토콜이 좀 유별난 것일 가능성이 있습니다. 이런 경우에는 "expert" 모드로 부팅하여 [XFree86](https://wiki.kldp.org/wiki.php/XFree86) 시스템에서 사용하는 정확한 프로토콜을 지정줄 수 있습니다. 그러나 마우스 포인터가 화면 한 가운데 나타나서 마우스의 동작에 반응하지 않는다면 BIOS의 버그를 의심해봐야할지도 모릅니다.(최근에 이 문제가 노트북에서 자주 발생하는 것으로 알려져 있습니다.) 만일 그렇다면 부팅 화면에서 다음과 같이 입력해보십시오.

``` 
 knoppix pci=irqmask=0x0e98
```

바이오스를 업데이트함으로서 문제를 해결할 수도 있을 것입니다.(아마 이 방법을 선호할 것입니다.)

#### Q: 시스템 메모리가 완전히 인식되지 않습니다. 다음과 같은 메시지가 나타나면서 부팅이 중지됩니다. "Panic: cannot mount root file system"\!

A: 몇몇 보드에서 리눅스 커널에 정확하지 않은 메모리 크기를 보고하는 경우가 있습니다. 문제를 해결하기 위해서는 부트 옵션으로 정확한 메모리 크기를 명시해줍니다. 예를 들어, 128MB의 메모리를 사용하고 있다면 다음과 같이 입력합니다.

``` 
 knoppix mem=128M
```

(확실히하기 위해 컴퓨터 케이스를 열어 메모리의 크기를 확인합니다.)

#### Q: 내 모니터는 회전할 수 있습니다. 크노픽스에서 portrait-mode(초상화 모드. 역주 : 피봇기능을 말하는 듯 합니다.)는 어떻게 설정합니까?

A: 루트권한으로 /etc/X11/XF86Config-4를 수정해야 합니다. "Device" 부분에 다음 내용을 추가하십시오.

    Option "Rotation" "CW"

CW는 [시계방향](http://en.wikipedia.org/wiki/Clockwise)을 말합니다. 다른 옵션인 CCW는 [반시계방향](http://en.wikipedia.org/wiki/Counterclockwise)입니다.

#### Q: RAID 컨트롤러를 가지고 있습니다만 /dev에 장치파일이 보이지 않습니다.(/dev/cciss/c0d0,/dev/cciss/c0d1, etc.) 다음 버전에는 추가될까요?

A: dmesg 결과에 cciss가 나타난다면 드라이버를 가지고 있다는 것을 의미합니다. 그러나 크노픽스 4.0은 /dev/cciss가 포함되어 있지 않지요. 다음과 같이 해봅니다.

    knoppix# cd /dev
    knoppix# sh MAKEDEV cciss

/dev/cciss/\*가 만들어질 것입니다. 이제 새로운 파일 시스템을 /dev/cciss/c0d0p1 등에 마운트할 수 있습니다.

#### Q: 크노픽스를 하드디스크에 설치했거나 설정 파일 저장기능을 활용하는 경우, 그래픽 카드 드라이버를 업데이트하거나 재설정하려면 어떻게 해야하나요?

A: 가장 쉬운 방법을 소개합니다. 전원을 내리고 카드를 설치한 다음 최신 버전의 크노픽스 CD로 부팅합니다. 부팅이 끝나면 부팅된 CD의 /etc/X11/XF86Config-4 파일을 하드디스크에 설치되어 있는 크노픽스 시스템으로 복사합니다. 만일의 경우를 위해 이전 /etc/X11/XF86Config-4 파일은 /etc/X11/XF86Config-4.bak 등으로 백업해두는 것이 바람직할 것입니다.

#### Q: 마우스에 따른 장치 파일 이름은?

A:
  - PS/2 마우스는 /dev/psaux
  - Serial 마우스는 /dev/ttys0 (윈도우즈의 COM1과 동일합니다.).
  - USB 마우스는 /dev/input/mice  

#### Q: 리눅스와 호환되는 하드웨어를 구입하고 싶습니다. 어떻게 알 수 있죠?

A: <http://www.tldp.org/HOWTO/Hardware-HOWTO/index.html와> <http://www.tldp.org/HOWTO/Hardware-HOWTO/incompatible.html를> 참고하십시오.

#### Q: 크노픽스에서 다른 CD를 사용하는 것이 가능합니까?

A: *여기에서는 매우 간단한 방법에 대해서만 소개하고 있습니다.*

  - 2개의 CD 드라이버를 가지고 있습니다.
  - 크노픽스 이미지를 저장할만한 기가단위의 RAM을 가지고 있습니다. 부트 옵션으로 "knoppix toram"를 사용합니다. 최소한 1GB 이상은 되어야 합니다.
  - 크노픽스 터미널 서버를 통해 네트워크로 부팅했습니다. [Preboot eXecution Environment](http://en.wikipedia.org/wiki/PXE)를 활용합니다. PXE는 요새는 잘 쓰이지 않는 부트 롬입니다. 이에 대한 자세한 정보를 원하면 [Knoppix PXE FAQ](http://www.knoppix.net/wiki/PXE_FAQ)를 참고합니다.
  - CD 이미지를 하드디스크에 복사하고 부트 옵션으로 "knoppix bootfrom=/dev/hda1/....iso"를 사용합니다.
  - 이 밖에 실험적인 부트 미디어 옵션에 대해 관심이 있다면 [miniroot\_changes](http://www.knoppix.net/wiki/User:Ml#miniroot_changes)를 참고합니다.
