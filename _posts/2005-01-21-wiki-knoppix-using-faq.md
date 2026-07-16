---
layout: post
title: "Knoppix Using FAQ"
info: "KLDP Wiki에 옮겨 두었던 Knoppix 사용 FAQ 번역 문서"
tech: "Linux, Knoppix, FAQ"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/UsingFAQ"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 옮겨 두었던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  - 원문 : <http://www.knoppix.net/wiki/Using_FAQ>
  - 번역 : 신재훈([GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) : gunsmoke.shin at gmail.com)

#### Q: 크노픽스 파일 시스템을 찾을 수 없다는 메시지에 딸랑 쉘만 뜹니다. 어떻게 부팅해야 하나요?

A: 에러 메시지는 다음과 같습니다.

``` 
 Uncompressing Linux... Ok, booting the kernel.

  Welcome to the KNOPPIX live Linux-on-CD!

 
 Scanning for USB/Firewire devices... Done.
 Enabling DMA acceleration for: hda      [Maxtor 2B020H1]
 Enabling DMA acceleration for: hda      [LTN486S]
 Can't find KNOPPIX filesystem, sorry.
 Dropping you to a (very limited) shell.
 Press reset button to quit.

 Additional buitin commands available:
        cat       mount     umount
        inmod     rmmod     lsmod

 knoppix# _
```

크노픽스는 사용자의 개입없이 하드웨어를 자동적으로 인식하고자 최선을 다합니다. DMA는 CD롬, 하드드라이브와 같은 IDE 기기의 데이터 전송 속도를 증가시키는 기술로서 (하드웨어)칩셋, 하드디스크가 손상되었거나 오류가 있는 시스템에 DMA를 적용하면 문제가 발생할 수 있습니다. 대체로 DMA를 지원하지 않는 CD롬 드라이브에서 크노픽스를 실행하는 경우에 이러한 문제가 발생합니다. 크노픽스 3.4부터 3.7까지 DMA가 기본적으로 활성화되어 있는 반면 3.8 이후 버전에서는 비활성화되어 있습니다. 크노픽스 3.4부터 3.7까지 이러한 DMA 관련 문제가 발생할 때에는 부팅중에 다음의 치트코드를 사용하기 바랍니다.

``` 
 knoppix nodma
```

#### Q: 어째서 DMA가 기본적으로 비활성화되어 있습니까? 이를 활성화시키려면 어떻게 해야 하나요?

A: 크노픽스는 사용자의 개입없이 하드웨어를 자동적으로 인식하고자 최선을 다합니다. DMA는 CD롬, 하드드라이브와 같은 IDE 기기의 데이터 전송 속도를 증가시키는 기술로서 (하드웨어)칩셋, 하드디스크가 손상되었거나 오류가 있는 시스템에 DMA를 적용하면 문제가 발생할 수 있습니다.

만일 시스템이 DMA를 지원하고 하드디스크를 통해 크노픽스를 부팅했다면 쉘에서 다음과 같이 입력합니다.

    knoppix# /sbin/hdparm -c3 -d1 -m16 -k1 /dev/hda

매번 입력하는 대신 DMA를 지속적으로 활성화시키기 위해서는 시작 스크립트인 "/etc/init.d/bootmisc.sh"의 hdparm -qd1 /dev/hda 행에 주석을 제거해서 재부팅합니다. 그러한 행이 없다면 직접 추가합니다.

가장 확실한 방법은 hdparm 패키지를 설치하는 것입니다. (이를 위해 다음과 같이 입력합니다.

    knoppix# apt-get install hdparm

라고 입력합니다.) 그리고 설정 파일인 "/etc/hdparm.conf"를 수정하는 것이죠. 이와 관련하여 더 많은 정보를 원한다면 다음의 문서를 참고합니다.

<http://linux.oreillynet.com/pub/a/linux/2000/06/29/hdparm.html>

#### 크노픽스와 윈도우즈 및 다른 시스템간에 파일 전송하기

##### Q: 데스크탑에 있는 하드디스크 아이콘을 클릭함으로서 파티션에 접근할 수 있군요. 그런데 쓰기를 시도할 경우 "접근금지"라는 에러 메시지가 뜹니다. 쓰기 작업을 위해서는 어떻게 해야합니까?

A: 크노픽스 5.0.1부터는 자동 인식된 파일 시스템에 대해 기본적으로 읽기 전용 속성이 부여됩니다. 파일 시스템에 쓰기위해서는 데스크탑의 'hda1'같은 파티션 아이콘에 오른쪽 마우스 버튼으로 클릭하고 Change read/write mode"를 선택하면 됩니다. 파일 시스템의 속성을 변경하기 위해서는 마운트되어 있어야 합니다. "Change read/write mode"를 선택하는 것은 다음의 쉘 명령 결과와 동일합니다.

    knoppix# mount -o remount,rw /dev/<device>

여기서 \<device\>는 'hda1'과 같이 속성을 변경할 파티션을 말합니다. 장치 및 마운트되어 있는 디렉토리의 허가권을 수정함으로서 쓰기가 가능해지는 것은 아님을 주의하기 바랍니다.

NTFS 파일 시스템에 대한 쓰기 지원은 (비록 여전히 실험적이라 사용할때 주의를 기울여야 하지만)크노픽스 5부터 가능해졌습니다.

쓰기 속성을 부여하기 위해 어떻게 클릭해야하는지 한장의 스크린샷을 준비했습니다.

![http://joga.daug.net/readwrite.png](http://joga.daug.net/readwrite.png)

[\[PNG external image\]](http://joga.daug.net/readwrite.png)

##### Q: NTFS 파티션에 데이터를 쓰기 위해서는 어떻게 해야합니까?

A: 크노픽스 5는 libntfs와 fuse를 통하여 [NTFS](http://www.wikipedia.org/wiki/NTFS) 파티션에 대한 쓰기를 지원합니다. 사전 실험결과가 안정적이고 NTFS에 대한 데이터 손실 가능성이 낮음에도 불구하고 이 라이브러리는 여전히 베타버전이며 '데이터 손실 및 디스크 손상에 대한 위험'을 가지고 있습니다.(따라서 데이터를 백업하는 것이 우선입니다.) 크노픽스(크노픽스의 리눅스 커널)는 NTFS 파티션을 읽는데 아무 문제가 없습니다 문제는 쓰기를 시도하는 경우에만 발생합니다. 구 버전의 크노픽스는 NTFS 파티션에 쓰는 것을 제한할 수 있었습니다. 가장 큰 문제는 NTFS 파일 시스템에 기반하고 있습니다.(윈도우즈 시스템에 접근하기 위한 NTFS 드라이버로 [Captive NTFS](http://www.jankratochvil.net/project/captive/)가 사용되었었습니다. 그러나 Captive NTFS는 느리고 불안정했습니다.)

##### Q: 다른 운영체제를 통해 크노픽스에서 만든 파일에 어떻게 접근합니까?

A:

  - **윈도우즈 NT, XP (NTFS) and 윈도우즈 95, 98에서**
      - USB 메모리를 사용하는 방법
          - USB 메모리 설치하고 크노픽스로 부팅합니다. 데스크탑에 USB 메모리의 아이콘이 나타날 것입니다.
          - 기본적으로 USB 메모리의 속성은 읽기 전용입니다. 읽고 쓰기 속성을 부여하기 위해 마우스 오른쪽 단추 - Actions -\> Change Read/Write mode -\> yes를 클릭합니다.
          - USB 메모리의 파일 시스템에 저장된 파일은 윈도우즈에서 읽을 수 있습니다.
      - 플로피 디스켓을 이용하는 방법은?
      - CD RW기기를 이용하는 방법은?
      - 크노픽스를 하드디스크에 설치한 경우 윈도우즈 XP에서 크노픽스 파티션에 접근 가능한가?  

  - **Windows 95, 98에서**  

      - 위에 설명한 방법대로 크노픽스에서 파일 시스템을 마운트하고 쓰기 속성을 지정합니다.  

      - 크노픽스 파티션은 윈도우즈 95, 98에서 읽을 수 있는가?  

##### Q: 네트워크를 통해 윈도우즈 컴퓨터로 파일을 복사하고 싶습니다.

A:

  - 첫번째 방법

크노픽스로 부팅합니다. KDE 데스크탑 환경이 완전히 로드되었으면 콘솔 하나를 실행합니다. 여기에서 hda1(윈도우즈 형식으로 구분하자면 C 드라이브)의 파티션 형식이 FAT32라고 가정하고 이를 마운트하기 위해 다음의 명령을 입력합니다.

    knoppix# sudo mount -t vfat -o ro,users /dev/hda1 /mnt/hda1

hda1의 파티션 형식이 NTFS 라면 다음과 같이 입력합니다.

    knoppix# sudo mount -t ntfs -o ro,users /dev/hda1 /mnt/hda1

그리고 나서 GUI 방식의 파일 관리자(컹커러)를 실행합니다.

    knoppix# sudo konqueror

컹커러가 실행되면 위치 표시줄(location bar)에 윈도우즈 도메인 인증을 위해 다음과 같이 입력합니다. 그러면 윈도우즈 공유 네트워크에 접근할 수 있습니다.

``` 
 smb:/domain\username@IP.address.of.machine
```

만일 윈도우즈 도메인 인증이 필요없다면 다음과 같이 입력합니다.

``` 
 smb:/hostname
```

**역자주 : 일반 작업 그룹 환경에서는 이렇게 사용하면 됩니다.**

혹은 다음과 같이 입력합니다.

``` 
 smb:/IP.address.of.machine
```

이제 윈도우즈 공유 자원에 접근할 수 있습니다. 데이터를 저장할 디렉토리로 이동한 후 새 탭이 열리도록 Ctrl + T 키를 누릅니다. 새 탭에서 다음과 같이 입력합니다.

``` 
 /mnt/hda1/
```

새 탭에는 hda1(C 드라이브)의 파일, 디렉토리를 확인할 수 있습니다. 윈도우즈 탐색기를 사용하는 것처럼 복사할 파일 및 디렉토리를 선택하고 Ctrl + C 키 혹은 오른쪽 클릭후 복사를 선택합니다. 삼바를 통해 연결되어 있는 다른 탭을 선택하고 Ctrl + V 혹은 오른쪽 클릭후 붙이기를 선택하면 파일 전송이 시작됩니다. 파일 복사가 끝나면 컹커러를 종료하고 KDE 데스크탑 환경의 K 메뉴(시작 메뉴)를 눌러 시스템 재부팅/종료를 선택합니다. 시스템을 종료하기 위한 명령은 다음과 같습니다.

    knoppix# sudo init 0

  - 네트워크 양쪽에서 가능한 두번째 방법 : 다음과 같이 입력하여 삼바를 시작합니다.

<!-- end list -->

    knoppix# sudo /etc/init.d/samba start

삼바 사용자를 추가합니다.

    knoppix# smbpasswd -a knoppix

이 과정이 끝나면 크노픽스 사용자의 홈 디렉토리는 읽기 전용으로 공유됩니다. 다른 디렉토리를 공유하고 싶다면 삼바 설정 파일(/etc/samba/smb.conf)을 수정하여 삼바를 재시작합니다.(삼바 시작 스크립트에서 start 대신 restart를 입력합니다.)

  - 원격 공유 디렉토리 마운트하는 방법 : 삼바를 시작하는데 경고 메시지가 발생한다면 nmblookup 명령을 활용합니다.

<!-- end list -->

``` 

knoppix# mkdir tmp/share; sudo mount -t smbfs -o username=Administrator //otherbox/share /tmp/share
```

  - lissetup.sh를 활용할 수 있습니다. 콘솔에서 이 스크립트를 내려받기 위해서는 다음과 같은 명령을 입력합니다.

<!-- end list -->

    knoppix# wget http://users.volja.net/zejnovi/lissetup.sh

스크립트를 내려받은 다음 콘솔에서 다음과 같이 입력합니다.

    knoppix# chmod +x lissetup.sh

그리고 다음과 같이 입력합니다.

    knoppix# ./lissetup.sh

이 과정이 끝나면 컹커러에서 LAN 브라우저를 사용할 수 있습니다.

#### Q: 루트계정의 비밀번호는 무엇입니까??

A: 없습니다. 모든 비밀번호는 기본적으로 잠겨(locked/scrambled) 있죠. 비밀번호가 필요한 상황을 대비해 비밀번호를 설정할 수 있습니다. 크노픽스 메뉴 - Root Shell을 실행하고 다음과 같이 입력합니다.

    knoppix# passwd

그리고 루트계정의 비밀번호를 입력합니다. 크노픽스 5.0.1에서는 크노픽스 메뉴 - 설정 - 루트 비밀번호 변경을 선택할 수 있습니다. 이 주제와 관련해서 KNOPPIX/README\_Security.txt 파일을 참고하기 바랍니다.

콘솔에서 다음처럼 또는

    knoppix# sudo su

다음과 같이 명령할 수 있습니다.

    knoppix# sudo -s

혹은 Ctrl + Alt + F2 키를 눌러 루트 권한을 획득한 텍스트 콘솔을 얻을 수 있습니다.

그러나 어떤 버전에서는 'sudo -s' 명령에 대해 비밀번호를 물어볼 수 있습니다. 만일 아무런 내용없이 Enter 키를 누르면 인증실패라는 에러 메시지를 보여줄 것입니다. Knoppix.net의 ["Root Password (what is it?)"](http://www.knoppix.net/forum/viewtopic.php?t=11500) 쓰레드에서 이와 관련된 논의를 찾아볼 수 있습니다.

#### Q: DVD 어떻게 시청하죠?

A: 먼저 크노픽스를 하드디스크에 설치해야 합니다. 만일 크노픽스 CD로 부팅했다면 다음의 과정을 진행할 수 없습니다.

  - 루트 계정을 획득합니다.
  - 다음의 행을 /etc/apt/sources.list에 추가합니다.

<!-- end list -->

``` 
 deb http://www.videolan.org/pub/videolan/debian $(ARCH)/
 deb-src http://www.videolan.org/pub/videolan/debian sources/
```

**/etc/apt/sources.list의 주소가 적절하지 않아 다음의 주소로 대신합니다.**

``` 
 deb http://download.videolan.org/pub/videolan/debian $(ARCH)/
 deb-src http://download.videolan.org/pub/videolan/debian sources/
```

  - 다음을 수행합니다.

<!-- end list -->

    knoppix# apt-get update
    knoppix# apt-get install libdvdcss2

  - DVD를 실행합니다. (Xine, Ogle, Videolan, Mplayer 등을 실행하라는 얘기죠)
  - DVD가 건너뛰어(skips and jumps) 재생된다면 DMA 기능을 활성화시켜야 합니다.
  - DMA 기능을 활성화시키기 위해서는 루트 계정으로 로그인하고 다음과 같이 입력합니다.

<!-- end list -->

    knoppix# /sbin/hdparm -d <device name>

이를테면 '/sbin/hdparm -d /dev/hdc'라고 입력했을때 'using\_dma = 1 (on)'가 출력된다면 이미 활성화되어 있는 상태임을 알려줍니다.

  - 다음과 같은 방법으로 DMA 기능을 활성화시킬 수도 있습니다.

<!-- end list -->

    knoppix# /sbin/hdparm -d 1 /dev/hdc

  - DMA 기능을 자동적으로 활성화하기를 바란다면 시작 스크립트(/etc/init.d/bootmisc.sh)에 다음의 행을 추가합니다.

<!-- end list -->

    knoppix# /sbin/hdparm -d 1 /dev/hdc

  - Enjoy watching DVDs in Linux :-)  

#### Q: 크노픽스를 하드디스크에 설치하고 기본 언어와 키보드를 독일어로 선택했습니다. 이것을 어떻게 US English로 바꿀 수 있나요? 어찌어찌해서 KDE 제어판을 통해 KDE로 바꿨는데 키보드는 여전히 독일어로 지정되어 있어 몇몇 키가 오작동하고 있습니다.

**역주 : 크노픽스 한글은 이미 로케일 설정이 되어 있으므로 별도의 로케일, 언어 설정이 필요없습니다.**

A : 상태표시줄(taskbar)의 트레이에 있는 독일 국기 아이콘에서 오른쪽 클릭, 팝업 메뉴의 설정을 선택하여 키보드 레이아웃을 변경할 수 있습니다. 아니면 KMenu \> 설정 \> 제어판 \> Regional & Accessibility \> 국가/지역 & 언어 \> 로케일 \> 국가를 "C - Default"로 선택하고 키보드를 English: US로 선택합니다. 이는 KDE에 반영됩니다.

그외 시스템의 다른 부분의 설정을 변경하기 위해 루트 권한을 획득하고 다음과 같이 입력합니다.

    knoppix# dpkg-reconfigure locales

로케일 목록을 선택하는 화면에서는 Tab 키, Enter 키를 눌러 넘어갑니다. 다음 화면에서 "Which locale should be the default in the system environment?"라고 물을때 en\_US를 선택합니다. ISO-8859-15도 좋습니다.(Euro가 포함되어 있습니다.) ISO-8859-1(Latin1을 말합니다.)도 나쁘지 않습니다.

#### Q: KDE에서 기본 언어와 키보드를 설정했습니다. 그런데 모질라 웹 브라우저에서 몇몇 페이지는 여전히 영어가 아닌 독일어로 보여지네요. 어떻게 고칠 수 있습니까?

**역주 : 크노픽스 한글은 이미 파이어폭스의 언어 설정이 되어 있으므로 별도의 설정이 필요없습니다.**

A1: 모질라 웹 브라우저에서 Edit \> Preferences...를 선택하고 Language를 체크합니다. 아마 다중 언어 항목에서 독일어가 영어보다 더 선호되는 언어로 지정되어 있을 것입니다. 영어를 독일어보다 위로 올려 선호 언어로 지정할 수 있습니다.

A2: 파이어폭스에서 Edit \> Preferences를 선택하고 Advanced 단추를 클릭합니다. General탭에서 Edit Languages 단추를 클릭합니다. 영어에 클릭하여 가장 윗쪽으로 옮깁니다.

#### Q: 크노픽스의 [partimage](http://www.partimage.org)를 이용해서 파티션 이미지를 만들 수 있을 것 같은데요? 누구 해본 사람 없나요? Thanks in advance\! <http://linuxwiki.de/Brüßler>

A: 잘 동작합니다. [LinuxWiki PartImage (독일어-\_-;)](http://linuxwiki.de/PartImage)를 참고하세요.

#### Q: CD로 부팅되어 있을때 세션의 설정 내용(언어, UI 등)을 어떻게 저장하나요? 설정 내용은 어떻게 불러오죠?

A : K-menu - KNOPPIX - 설정에서 설정내용 저장하기를 선택하면 플로피 디스켓이나 하드디스크의 파티션에 설정 내용을 저장할 수 있습니다. (윈도우즈 파티션에 저장하는 것도 가능합니다.) 설정 내용을 불러오려면 부팅시 boot 프롬프트에서 다음과 같이 입력합니다.

    knoppix myconfig=scan

부팅중에 저장되어 있는 설정 내용을 불러올 것입니다

#### Q: lang=es 옵션을 적용하여 크노픽스를 하드디스크에 설치했습니다. 실수로 /home/knoppix 디렉토리의 사용자 환경 설정 파일을 삭제하니 spanish 키보드의 "\< \>" 키가 KDE 데스크탑 환경에서 인식되지 않는군요. 관련된 설정 파일에 대해 가르쳐주세요.

**역주 : 크노픽스 한글은 이미 로케일 설정이 되어 있으므로 별도의 로케일, 언어 설정이 필요없습니다.**

A: KDE 데스크탑 환경의 오른쪽 아래에 있는 작은 깃발 아이콘을 확인합니다. 그리고 부팅시 lang=es 옵션을 적용하면 커널 파라미터에 설정 내용이 반영될 것입니다. 영구적으로 적용하기 위해서는 lilo의 설정 파일 /etc/lilo.conf를 설정합니다.

#### Q:부팅 과정에서 사용되는 크노픽스 시작 스크립트는 어디에 있습니까?

A: 초기화 스크립트는 /etc/init.d에 위치하고 있습니다. 그리고 SYSV 형태의 심볼릭 링크는 /etc/rcX.d 디렉토리에 있습니다.

#### Q: 부팅 과정에서 적용되는 파라미터(환경변수 등)는 어디에서 찾을 수 있습니까?

A:/etc/init.d/knoppix-autoconfig를 참고합니다.

#### Q: 어떻게 USB 메모리에 설정 내용을 저장합니까?

A: 먼저 USB 메모리를 꽂은 채 크노픽스로 부팅합니다. 크노픽스 메뉴의 설정 - 설정 내용 저장을 선택합니다. 이때 저장할 장소를 묻는데 /dev/sda1를 선택합니다. 설정 내용을 불러오려면 부팅시 부트 프롬프트에서 다음과 같이 입력합니다.

    knoppix myconf=scan home=scan

#### Q: 크노픽스를 사용한 후에 컴퓨터가 시작되지 않습니다\!(델 컴퓨터)

A: 델 컴퓨터의 BIOS와 관련된 얘기입니다. 단순히 전원 코드를 뽑아서 몇 초 동안 기다렸다가 다시 부팅하면 정상적으로 시작됩니다. 크노픽스 부팅시 다음과 같이 커널 파라미터를 입력함으로서 문제를 해결할 수도 있습니다.

    apm=off

혹은 다음과 같이 입력할 수도 있습니다.(이렇게 입력하는 것이 APM의 다른 부분들에 대해서는 그대로 유지해주기 때문에 낫습니다.

    apm=real-mode-poweroff

#### Q: Xine를 이용해서 영화를 보려고 합니다. 자막 파일은 있는데 보이지 않네요.

**역주 : Xine의 GUI 도구를 이용해서 자막을 쉽게 불러올 수 있습니다. 크노픽스 한글의 Xine은 한글 자막을 볼 수 있습니다.**

A: 콘솔에서 다음과 같이 입력해서 Xine을 실행합니다.(ext는 자막 파일의 확장자를 의미합니다.)

    xine name_movie.ext#subtitle:name_subtitle.ext

#### Q: 문서작업, 계산, CD 이미지 작업, 스캐닝, 웹 서핑, 채팅 등등... 크노픽스에서 활용할 수 있는 응용 프로그램에는 무엇이 있나요?

A: [Knoppix Tutorial.](http://www.eleli.de/knoppix/docs/tutorial/english)를 참고합니다. 또한 [Using and Customizing Knoppix](http://www.linuxdevcenter.com/pub/a/linux/2003/11/20/knoppix.html?page=2)도 유용합니다.

#### Q: 크노픽스를 시작할때 매번 크노픽스 웹 페이지가 뜨는 것을 어떻게 막을 수 있죠?

A: 깨끗한 데스크탑 바탕화면으로 부팅하기 위해 시작 스크립트를 수정하는 4 단계를 소개합니다.

1.먼저 루트 권한을 획득합니다. 콘솔에서 다음과 같이 입력하세요.

    knoppix# sudo -s

2\. 읽기 전용으로 링크되어 있는 X 초기화 파일을 CD에서 삭제합니다. 다음과 같이 입력합니다.

    knoppix# rm /etc/X11/Xsession.d/45xsession

3\. /KNOPPIX/etc/X11/Xsession.d/45xsession file을 kwrite편집기로 엽니다. 다음과 같이 입력합니다.

    knoppix# kwrite /KNOPPIX/etc/X11/Xsession.d/45xsession

3.1 kwrite에서 다음의 행을 찾습니다. kwrite의 메뉴에 있는 확대경 아이콘을 클릭하면 문자열을 검색할 수 있습니다.

``` 
 ln $HOME/Desktop/KNOPPIX.desktop $HOME/.kde/Autostart/showindex.desktop
```

3.2 다음의 행 사이에

``` 
 ln $HOME/Desktop/KNOPPIX.desktop $HOME/.kde/Autostart/showindex.desktop
...
 fi
```

다음의 내용을 추가합니다.

``` 
 #added by gh78 --this next line removes the  autostart link 
 rm -f $HOME/.kde/Autostart/showindex.desktop
 #added by gh78 --this next line removes the  knoppix intro web page from your desktop as well 
 rm -f $HOME/Desktop/KNOPPIX.desktop
```

4\. X 초기화 파일을 '/etc/X11/Xsession.d/45xsession' 이름으로 저장합니다.

끝났습니다. 이제 설정 파일을 저장합니다.(역주 : 설정 파일을 저장하는 방법은 이 FAQ에 소개된 바 있습니다.) /etc 디렉토리의 설정 파일들이 저장됨으로서 다음 부팅때는 새로 시작 스크립트를 생성하지 않는 대신 저장되어 있는 시작 스크립트의 영향을 받게 됩니다.
