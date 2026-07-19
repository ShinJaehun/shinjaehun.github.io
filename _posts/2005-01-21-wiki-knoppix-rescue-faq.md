---
layout: post
title: "Knoppix Rescue FAQ"
info: "KLDP Wiki에 옮겨 두었던 Knoppix 응급 복구 FAQ 번역 문서"
tech: "Linux, Knoppix, System Recovery, FAQ"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/RescueFAQ"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 옮겨 두었던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  - 원문 : <http://www.knoppix.net/wiki/Rescue_FAQ>
  - 번역 : 신재훈([GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) : gunsmoke.shin at gmail.com), sephiron  

크노픽스는 매우 훌륭한 응급 복구 도구이기도 합니다. 리눅스나 다른 운영체제를 고치거나 데이터를 백업하고 패스워드를 되찾는 등의 작업을 할 수 있습니다. 다음 해결책들은 수리를 필요로 하는 시스템에서 크노픽스로 부팅했음을 가정하고 있습니다.

#### Q: 패키지를 업데이트하기 위해 내 데비안 시스템에 들어가고 싶은데 부팅이 되지 않습니다. 어떻게 해야 하나요?

A : 크노픽스 CD로 부팅해서 크노픽스 루트 쉘을 이용하여 파티션을 마운트합니다. 예를 들어 다음 명령은

    mount /dev/hda1 /mnt/hda1
    chroot /mnt/hda1

들어가고 싶어하는 시스템의 루트 쉘을 되돌려 줄 것입니다. 이제 패키지를 결정하고 업데이트합니다. <http://www.debian.org/distrib/packages> 그리고 이전 문제를 해결하는데 dpkg -install 명령을 실행하면 패키지가 중지되는 것을 보여줍니다.

#### Q : 리눅스 박스가 고장나서 LILO를 재설치하고자 합니다.

A : 파티션을 마운트하고 루트 권한으로 LILO를 실행합니다.

    mount -o dev /mnt/hda1

이미 마운트되어있다면 "nodev" 플래그를 명시해야할 것입니다.

    sudo mount -o remount,dev /mnt/hda1

루트 권한으로 디렉토리에 들어가 lilo를 실행합니다.

    chroot /mnt/hda1 lilo

#### Q : 네\! 크노픽스로 부팅했습니다. 이제 어떻게 해서 데이터를 복구하죠?

A1 : 다음 링크를 참고합니다.
  - [Computer First Aid Using Knoppix](http://www.shockfamily.net/cedric/knoppix/),
  - [System Recovery](http://www-128.ibm.com/developerworks/linux/library/l-knopx.html?ca=dgr-lnxw01-obg-SysRecover), 
  - [OSCON 2005-08-04 System Rescue with Knoppix](http://www.greenfly.org/talks/knoppix/rescue-oscon05.html).

A2 : 파일을 복구하는 가장 좋은 방법은 USB 드라이브를 사용하는 것입니다.

  - USB 드라이브를 시스템에 삽입합니다. 데스크탑에는 하드 드라이브 아이콘이 최소한 둘 이상 나타날 것입니다.(하나는 시스템 하드드라이브, 또 다른 하나는 USB 드라이브)
  - USB 드라이브 아이콘을 마우스 오른쪽 버튼으로 클릭하고 드라이브에 쓸 수 있도록(보안을 이유로 기본적으로 읽기 전용으로 되어 있습니다.) "Action -\> Change read/write mode"를 선택합니다.
  - 이제 백업하고자 하는 파일을 찾아 드래그 앤 드랍으로 USB 파일로 옮깁니다. 파일을 다 옮겼으면 시스템을 종료하고 USB 드라이브를 제거합니다.  

A3 : CD 라이터가 설치되어 있다면(크노픽스가 부팅하는 드라이브에 추가적으로) 다양한 크노픽스 CD 생성 도구를 사용합니다. CD 드라이브가 하나 밖에 없더라도 1기가 이상의 메모리를 가지고 있다면 치트코드 "toram"을 사용해서 CD를 사용할 수 있습니다. "toram"과 다른 치트코드를 사용하는 자세한 방법에 대해서는 <http://www.knoppix.net/wiki/Cheat_Codes>를 참고합니다.

A4 : 네트워크를 통해 백업하고자 한다면 NFS나 삼바(윈도우즈 공유), scp(ssh copy), FTP, 전자 메일이나 다른 것을 사용할 수 있습니다. 한가지 방법으로 네트워크로 연결되어 있는 두 크노픽스 머신을 사용하여 다음과 같이 합니다.

  - 양쪽 머신에서 각각 크노픽스로 부팅합니다.  

  - "kmenu-\>KNOPPIX-\>servers-\>SSH Server"를 선택하여 접속 대상 머신에서 ssh 서버를 시작하고 충분한 공간을 가지고 있는 장치를 읽기/쓰기 모드로 마운트합니다.(주의 : NTFS는 현재 읽기/쓰기 모드를 지원하지 않고 있습니다.)  

  - 고장난 머신으로부터 접속 대상 머신으로 데이터를 옮기는데 scp를 사용할 수 있습니다.(이 예에서 접속 대상 머신의 IP 주소는 192.168.1.1입니다.) 고장난 머신에서 다음과 같이 명령을 내립니다. 이 명령으로 모든 디렉토리를 접속 대상 머신으로 복사할 것입니다.(재귀적으로)

    scp -r /mnt/hda1/importantdata/ knoppix@192.168.1.1:/mnt/hda1/backup

A5 : 사용할 수 있는 USB 장치를 가지고 있지 않거나 파일을 전송할 다른 로컬 시스템이 없다면 파일을 인터넷 사이트로 보낼 수 있습니다.(비록 인터넷 연결이 로컬 전송 속도보다 느리겠지만) 전자 메일을 활용할 수도 있습니다. ISP가 제공하는 FTP나 웹 공간에 파일을 저장해두는 것도 가능합니다. 혹은 대형 파일에 대해 무료 임시 저장 공간을 제공하는 수많은 인터넷 사이트들을 사용할 수도 있습니다. 다른 곳도 많지만 이러한 사이트중 하나가 yousendit.com입니다. 구글은 Gmail 사용자에게 2기가의 저장 공간을 제공합니다.(단일 파일의 크기는 어느정도 제한되어 있지만)

A6 : 어떤 사용자는 가장 간단한 방법으로 케이스에서 다른 디스크 드라이브를 설해서 FAT32 파티션으로 포멧해버립니다. 혹은 다른 CD나 DVD 드라이브를 추가합니다.

#### Q : MBR을 백업하거나 복구하고 싶습니다.

A : 백업하려면 다음과 같이 합니다.

    sudo dd if=/dev/hda of=mbr.backup bs=512 count=1

복구하려면 다음과 같이 합니다.

    sudo dd of=/dev/hda if=mbr.backup bs=512 count=1

**주의** MBR은 파티션 테이블(처음 프라이머리 엔트리 넷)을 포함하고 있어 백업해둔 이후에 파티션을 변경한다면 문제를 일으킬 수 있습니다.

파티션 테이블을 복구하려면 다음의 명령으로 대신합니다. 이 명령은 MBR의 마지막 64 바이트는 그대로 남겨둔채 처음 448 바이트만 쓸 것입니다.(4 파티션 테이블 엔트리 \* 16바이트/엔트리)

    sudo dd of=/dev/hda if=mbr.backup bs=1 count=448

#### Q : 설치되어 있는 윈도우즈/리눅스의 패스워드를 잊어버렸습니다.

리눅스 A1 : chroot와 passwd 명령을 실행하여 설치되어 있는 리눅스의 패스워드를 변경할 수 있습니다. 리눅스를 읽기/쓰기 모드로 마운트해야합니다.

    mount -o remount,rw /dev/hda1 /mnt/hda1
    chroot /mnt/hda1
    passwd root

리눅스 A2 : shadow의 패스워드 해시를 삭제합니다. 드라이브의 /etc/shadow 파일을 텍스트 편집기로 편집합니다.

    vi /mnt/hda1/etc/shadow

루트의 패스워드 해시를 제거합니다.(두번째 필드의 내용) 예를 들어 다음 내용을

    :root:dsfDSDF!s:12581:0:99999:7:::

아래와 같이 변경합니다.

    :root::12581:0:99999:7:::

패스워드는 공백으로 남게 됩니다. 더 자세한 정보는 [How to reset forgotten root passwords](http://linuxgazette.net/107/tomar.html)를 참고합니다.

윈도우즈 : 재설치하는 대신 [Offline NT Password & Registry Editor](http://home.eunet.no/~pnordahl/ntpasswd/)을 참고합니다.

#### Q : 다른 리눅스, \*nix 박스가 제대로 동작하지 않지만 네트워크는 제대로 동작한다고 생각합니다.

A : "ssh"나 "telnet"을 사용하여 원격으로 로그인합니다. 패스워드를 알아둘 필요가 있으며 로그인 후에는 쉘을 통해 박스를 고치는 것이 가능합니다.

#### Q : 크노픽스로 크노픽스를 복구하기 "리눅스를 처음 사용해보고 있습니다. 한 파티션에 크노픽스를 설치하고 다른 파티션에 윈도우 98을 설치하니 lilo를 다시 볼 수 없게 되었습니다. 어떻게 하면 lilo를 되살릴 수 있을까요?

A : 플로피 디스켓으로 부팅

크노픽스가 설치되어 있는 시스템에서 가지고 있는 부팅 디스켓으로 시스템을 부팅할 수 있습니다. /etc/lilo.conf를 편집하고 루트 권한으로 lilo를 실행합니다.

CD로 부팅

CD로 부팅해서 "knoppix 2"(<http://www.knoppix.net/wiki/Cheat_Codes>를 참고합니다.)라고 입력합니다. 크노픽스는 쉘 명령행으로 부팅할 것입니다. 루트 파티션을 마운트하고

    mount  /dev/hda1 /mnt

lilo.conf를 편집합니다.(시스템의 윈도우 파티션 항목을 삽입합니다.)

설치되어 있는 하드디스크로 루트 디렉토리를 변경합니다.(hda1이 설치되어 있는 하드디스크 파티션을 대체할 것입니다.)

    chroot /mnt/hda1

그리고 lilo를 실행합니다.

    lilo -v

#### Q: 크노픽스에서 윈도우즈 공유 자원을 사용(Samba를 이용하여)하려면 어떻게 해야 하나요

A: 여러 방법이 있지만 가장 손쉬운 방법은 아마도 다음 방법일 것입니다.

1.  컨커러로 들어가서 위치 막대기(역주. 주소 표시줄)에 호스트 정보를 다음 형식으로 입력합니다. *smb://HOST/SHARE*
2.  호스트 정보를 잊어버려 네트워크를 검색하고자 할 때 세 가지 사용하기 쉬운 유틸리티들이 있습니다. Lin Neighborhood (2003-04-18 이후 버젼), xSMBrowser (2003-04-18이전에 발표된 3.2버젼 용) 또는 Komba2 (그 이전 버젼용). 이 프로그램들은 메뉴에 있습니다.  

#### Q: 크노픽스에 Disk Drake같이 파티션을 편하게 관리할 수 있는 유틸리티들이 있나요

A: **parted**를 사용해 보셨나요?

  - <http://www.gnu.org/software/parted/>
  - <http://www.knoppix.net/search?q=parted&submit=Go>  

A2 : Windows XP/W2K/W2K3/NT4/Longhorn NTFS 파티션의 크기를 조절하려면[ntfsresize FAQ](http://mlf.linux.rulez.org/mlf/ezaz/ntfsresize.html#example)의 Solution 2가 잘 동작합니다. 심지어 1.9.0 버젼의 Ntfsresize는 조각난 파티션도 잘 처리합니다. 파티션을 백업하려면 [Partition Image](http://www.partimage.org/doc/index-3.html)와 ntfsclone이 좋습니다.

A3: 크노픽스는 또한 ntfsresize와 호환성있는 GUI 파티션 유틸리티 QTParted를 제공합니다.

#### Q: 스왑은 어떻게 설정합니까?

A: 램이 작은 컴퓨터에서는 크노픽스 씨디로 부팅했을 때 스왑파일을 사용하기 원할 것입니다. 사용자는 스왑파일을 기존 파티션에 만든다음 */etc/fstab*에 등록하고 스왑을 동작시킬 수 있습니다. 남은 용량이 충분한 마운트된 파티션을 고릅니다. 예제에서는 */mnt/hda1*이라 가정합니다.

  - 64MB짜리 스왑파일 용 선형 파일을 하나 만듭니다.

```
    dd if=/dev/zero of=/mnt/hda1/swapfile bs=1024 count=65536
```

  - 스왑 파티션 테이블을 추가합니다.

```
    mkswap /mnt/hda1/swapfile
```

  - */etc/fstab*에 이 파일을 등록합니다. 루트권한으로 다음 한 줄을 추가합니다.

```
    /mnt/hda1/swapfile swap swap defaults 0 0
```

  - 스왑을 켭니다. 다음을 루트권한으로 실행하십시오.

```
    swapon -a
```

  - */proc/swaps*에 스왑 파일이 나타나는지 확인하십시오.
