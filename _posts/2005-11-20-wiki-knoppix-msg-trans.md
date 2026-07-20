---
layout: post
title: "Knoppix 한글 스크립트 번역 작업"
info: "KLDP Wiki에 정리했던 Knoppix 한글 스크립트 번역 작업 문서"
tech: "Linux, Knoppix, Translation"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/MsgTrans"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 정리했던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

# Config

## knoppix-mkimage

**번역: 서민구. Minkoo Seo. minkoo.seo AT gmail.com**

**20051120 수정 [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke)**

---

* TITLE1="Create persistent KNOPPIX home directory"
* TITLE1="KNOPPIX 홈 디렉토리 유지기능"

* MESSAGE1="This script creates a persistent virtual harddisk image for the \"knoppix\" account on your harddisk or on a changeable medium like memory sticks, compact flash or zip media. Using this features makes it possible to store personal data and config files permanently over a reboot. The boot option \"home=/dev/uba1\", for the first partition of a USB memory stick as example, activates the persistent home directory at system startup. You can also let KNOPPIX scan all autodetected storage devices using the boot option \"home=scan\".
Do you want to create a persistent home directory or system config archive for the \"knoppix\" user?"
* MESSAGE1="이 스크립트는 \"knoppix\" 계정을 위하여 영구적인 가상 하드 디스크 이미지를 하드디스크 또는 USB 메모리와 같은 저장매체에 생성합니다. 이 기능을 사용하여, 개인 데이터와 설정 파일이 재부팅 후에도 보존되도록 할 수 있습니다. 예를 들어, 부트 옵션 \"home=/dev/uba1\"은 USB 메모리의 첫번째 파티션을 시스템 시작시에 홈 디렉토리로 설정합니다. 또한 부트 옵션 \"home=scan\"을 통해 자동으로 모든 저장매체의 홈 디렉토리 이미지를 검색하도록 할 수 있습니다."
\"knoppix\" 계정을 위한 영구적인 홈 디렉토리 이미지 또는 시스템 설정 아카이브를 생성하시겠습니까?"

* MESSAGE2="Please select a partition for creating the image:"
* MESSAGE2="이미지를 생성할 파티션을 선택하십시오:"

* MESSAGE3="There is already a Knoppix image present on this partition. Would like to delete/format it?"
* MESSAGE3="해당 파티션에는 이미 Knoppix 이미지가 존재합니다. 이를 삭제/포맷 하시겠습니까?"

* MESSAGE4="This is an NTFS partition. Because there is no vendor support for Linux that would allow writing directly to such a file system, you will first have to create an empty image file from within Windows(TM). You can find a program for this in the KNOPPIX directory on your CD. PLEASE BE AWARE THAT THIS IS A NEW YET A VERY EXPERINEMTAL FEATURE. THERE IS NO GUARANTEE THAT IT WILL WORK."
* MESSAGE4="NTFS 파티션입니다. 리눅스는 NTFS 파일시스템에 쓰기 동작을 수행하는데 필요한 벤더로부터의 지원이 없으므로, 먼저 Windows(TM)에서 비어있는 이미지 파일을 생성해야합니다. CD안에 있는 KNOPPIX 디렉토리에서 여기에 필요한 프로그램을 찾을 수 있습니다. 주의: 이 기능은 실험단계에 있습니다. 정상적인 작동을 보장하지 않습니다."

* MESSAGE5="Please chose the filesystem for the KNOPPIX image. ext3, reiserfs and xfs are journaling file systems and are very robust to errors, but require an additional amount of about 30MB disk space for the journal that cannot be used by actual content."
* MESSAGE5="KNOPPIX 이미지를 위한 파일 시스템을 선택하십시오. ext3, reiserfs, xfs 는 저널링 파일 시스템으로서 복구 기능이 뛰어납니다. 그러나 저널을 기록하는데 추가적으로 30MB의 공간이 소요되며, 이 공간은 사용자의 데이터를 저장하는데 사용할 수 없습니다."

* MESSAGE6="This image is currently in use. If you want to delete/reformat it, please reboot Knoppix first, without activating the image $IMAGE."
* MESSAGE6="이 이미지는 현재 사용중입니다. 만약 이 이미지를 삭제/포맷 하고 싶다면 $IMAGE 이미지를 비활성화 한 채로 Knoppix를 재부팅하십시오."

* MESSAGE11="This harddisk partition cannot be mounted in read-write mode currently, sorry."
* MESSAGE11="이 하드디스크 파티션은 읽기-쓰기 모드로 마운트 될 수 없습니다."

* E1="Personal configuration (desktop, programs)"
* E1="개인 설정 (데스크탑, 프로그램)"

* E2="Network settings (LAN, Modem, ISDN, ADSL)"
* E2="네트워크 설정 (LAN, 모뎀, ISDN, ADSL)"
 
* E3="Graphics subsystem settings (XF86Config)"
* E3="그래픽 서브시스템 설정 (XF86Config)"

* E4="Other system configuration (printer etc.)"
* E4="기타 시스템 설정 (프린터 등)"

* E5="All files on the Desktop (${DESKTOPKB}kB)"
* E5="데스크탑 상의 모든 파일 (${DESKTOPKB}kB)"
 
* SUCCESS="SUCCESS!
Creation of KNOPPIX configuration floppy was successful. Your configuration files will be reinstalled to the ramdisk on next KNOPPIX boot if you specify \"knoppix floppyconf\" (floppy disk), or \"knoppix myconfig=/mnt/directoryname\" at the boot prompt."
* SUCCESS="성공!
KNOPPIX 환경 설정 저장이 성공적으로 이루어졌습니다. 다음 KNOPPIX 부팅시에 부트 프롬프트에서 \"knoppix floppyconf\" 또는 \"knoppix myconfig=/mnt/directoryname\"를 사용하시면, 설정 파일이 램디스크에 재설치 되도록 할 수 있습니다."

* ERROR="The KNOPPIX configuration could NOT be saved:"
* ERROR="KNOPPIX 환경 설정 저장에 실패하였습니다:"

* MESSAGE_NO_PARTS="No suitable partitions could be found."
* MESSAGE_NO_PARTS="적절한 파티션을 찾지 못하였습니다."

* MESSAGE6="This image is currently in use. If you want to delete/reformat it, please reboot Knoppix first, without activating the image $IMAGE."
* MESSAGE6="현재 사용중인 이미지입니다. 만약 이 이미지를 삭제/포맷 하고 싶다면, $IMAGE 이미지를 비활성화 한 상태에서 Knoppix를 재부팅 하십시오."

* MESSAGE7="Do you want to save your home directory encrypted with AES256 (Advanced Encryption Standard, see <http://csrc.nist.gov/encryption/aes/>) If yes, you will have to specify a very long password at homedir creation and boot time."
* MESSAGE7="홈 디렉토리를 AES256 (Advanced Encryption Standard. <http://csrc.nist.gov/encryption/aes/> 참조)로 암호화 하시겠습니까? 만약 네(yes)로 응답할 경우, 홈 디렉토리 생성과 부팅시에 긴 비밀번호를 입력해야합니다."

* MESSAGE8="Please enter the desired size of your persistent homedir in MB (currently used: $HOMEKB kB, available:)"
* MESSAGE8="MB 단위로 원하는 영구적인 홈 디렉토리 이미지의 크기를 입력하십시오 (현재 사용중: $HOMEKB kB, 사용가능:)"

* MESSAGE9="Formatting Knoppix-Image and copying data..."
* MESSAGE9="Knoppix-Image 포맷 및 데이터 복사중..."

* MESSAGE10="Preparing for Linux filesystem..."
* MESSAGE10="리눅스 파일 시스템 준비중..."

* SUCCESS="The Knoppix-Image has been succeessfully formatted with the Linux ext2 filesystem, and your home directory and system configuration data has been transferred to it.
You may now reboot your computer, and KNOPPIX should find the image automatically. Alternatively, type \"knoppix home=$PARTITION\" or \"knoppix home=scan\" at the KNOPPIX boot: prompt."
* SUCCESS="Knoppix-Image 가 ext2 파일시스템으로 성공적으로 포맷되었고 홈 디렉토리와 시스템 설정 데이터가 전송되었습니다.

이제 컴퓨터를 재부팅해서 Knoppix가 이미지를 자동으로 검색하도록 할 수 있습니다. 또는 boot: 프롬프트에서 \"knoppix home=$PARTITION\" 또는 \"knoppix home=scan\"를 입력할 수 있습니다."

## mkdosswapfile

**20051120 수정 [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke)**

---

* ERROR2="Sorry, no usable partitions available for swapfile."
* ERROR2="스왑파일로 사용할 수 있는 파티션이 없습니다."

* MESSAGE1="Do you want to create a swapfile 'knoppix.swp' on your existing DOS partition $p? A swapfile allows you to use huge application packages like KDE even if your computer is low on memory. You can safely delete the swapfile after finishing your KNOPPIX session."
* MESSAGE1="'knoppix.swp'라는 스왑파일을 DOS 파티션 $p에 생성하시겠습니까? 스왑파일은 컴퓨터의 메모리가 적더라도, KDE와 같은 큰 응용프로그램을 사용할 수 있게 해줍니다. KNOPPIX 세션이 끝난 후 안전하게 스왑파일을 지울 수 있습니다."

* MESSAGE2="Please specify the amount of diskspace that you want to use as SWAP. Recommended: 60 - 128. Free: "
* MESSAGE2="스왑으로 사용하기 원하는 디스크영역의 용량을 정해주십시요. 추천: 60-128. 사용가능:"

* MESSAGE3="Creating swapfile 'knoppix.swp' on $p..."
* MESSAGE3="스왑파일 'knoppix.swp'를 $p에 생성중..."

* MESSAGE4="This is an NTFS partition. Because there is no vendor support for Linux that would allow writing directly to such a file system, you will first have to create an empty image file from within Windows(TM). You can find a program for this in the KNOPPIX directory on your CD."
* MESSAGE4="NTFS 파티션입니다. 리눅스는 NTFS 파일시스템에 쓰기 동작을 수행하는데 필요한 벤더로부터의 지원이 없으므로, 먼저 Windows(TM)에서 비어있는 이미지 파일을 생성해야합니다. CD안에 있는 KNOPPIX 디렉토리에서 여기에 필요한 프로그램을 찾을 수 있습니다."

* MESSAGE6="This image is currently in use. If you want to delete/reformat it, please reboot Knoppix first, without activating the image $IMAGE."
* MESSAGE6="현재 사용중인 이미지입니다. 만약 이 이미지를 삭제/포맷 하고 싶다면, $IMAGE 이미지를 비활성화 한 상태에서 Knoppix를 재부팅 하십시오."

* MESSAGE7="There is already a KNOPPIX.SWP image present on this partition. Would like to delete/format it? 
* MESSAGE7="이 파티션에 KNOPPIX.SWP 이미지가 이미 존재합니다. 파티션을 삭제하고 포맷하시겠습니까?"

* NO="Cancel" 
* NO="취소"

* MESSAGE8="This harddisk partition cannot be mounted in read-write mode currently, sorry."

* ERROR0="Unfortunately, the partition could NOT be mounted:" 
* ERROR0="파티션을 마운트 할 수 없습니다:"

* ERROR1="Sorry, not enough free space on $p. At least 60 MB required." 
* ERROR1="$p에 공간이 충분하지 않습니다. 최소 60MB가 필요합니다."

* SUCCESS="Swapfile 'knoppix.swp' on $p successfully created." 
* SUCCESS="$p에 스왑파일 'knoppix.swp'가 성공적으로 생성되었습니다."

## saveconfig

**20051120 수정 [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke)**

---

* TITLE1="Create KNOPPIX configuration archive"
* TITLE1="KNOPPIX 환경설정 저장 기능"

* MESSAGE1="Chose type of configuration files:"
* MESSAGE1="환경설정 파일 타입 선택:"

* MESSAGE2="Please insert an empty DOS- or ext2-formatted, writable floppy disk."
* MESSAGE2="DOS나 ext2 형식으로 포맷된 쓰기가 가능한 플로피 디스크를 삽입해주십시오."

* MESSAGE3="Saving configuration archive..."
* MESSAGE3="환경설정 저장중..."

* MESSAGE4="Please select directory for saving configuration files:"
* MESSAGE4="환경설정 파일을 저장할 디렉토리를 선택하세요:"

* E1="Personal configuration (desktop, programs)"
* E1="개인 환경설정 (데스크톱, 프로그램)"

* E2="Network settings (LAN, Modem, ISDN, ADSL)"
* E2="네트워크 설정 (LAN, 모뎀, ISDN, ADSL)"

* E3="Graphics subsystem settings (XF86Config)"
* E3="그래픽 서브시스템 설정 (XF86Config)"

* E4="Other system configuration (printer etc.)"
* E4="기타 시스템 설정 (프린터 등)"

* E5="All files on the Desktop (${DESKTOPKB}kB)"
* E5="데스크톱의 모든 파일 (${DESKTOPKB}kB)"

* ERROR="The KNOPPIX configuration could NOT be saved:"
* ERROR="KNOPPIX 설정을 저장할 수 없습니다:"

* SUCCESS="Creation of the KNOPPIX configuration archive was successful. Your configuration files will be reinstalled to the ramdisk on next KNOPPIX boot if you specify \"$BOOTOPT\"$AUTO at the boot prompt."
* SUCCESS="KNOPPIX 설정파일을 생성했습니다. 다음 부팅 시 부트 프롬프트에서 \"$BOOTOPT\"$AUTO을 지정하시면 설정파일이 램디스크에 다시 설치됩니다."

## knoppix-setrootpassword

* TITLE="Root Password"
* TITLE="루트 패스워드"

* MESSAGE1="Set password for 'root':"
* MESSAGE1="'root' 패스워드 설정:"

* MESSAGE2="Retype password:"
* MESSAGE2="패스워드 다시 입력:"

* MESSAGE3="Passwords did not match"
* MESSAGE3="패스워드가 일치하지 않습니다"

# Net

## wlcardconfig

**번역: 박신조. Sinjo Park. kte123 AT gmail DOT com**

---

* MESSAGE0="No wireless network card found."
* MESSAGE0="무선 네트워크 카드를 찾을 수 없습니다."

* MESSAGE1="Configuration of wireless parameters for"
* MESSAGE1="다음 장치의 무선 설정 바꾸기:"

* MESSAGE2="Please select wireless network device"
* MESSAGE2="무선 네트워크 장치를 선택해 주세요"

* MESSAGE3="Please configure IP parameters of the interface first"
* MESSAGE3="장치의 IP 설정을 먼저 해 주십시오"

* MESSAGE4="Enter the ESSID for"
* MESSAGE4="다음 장치의 ESSID를 입력하십시오:"

* MESSAGE5="\n\n\n(empty for 'any', not recommended !)\n"
* MESSAGE5="\n\n\n(비워 두시면 아무 네트워크나 사용하지만 추천하지 않습니다.)\n"

* MESSAGE6="Enter the NWID (cell identifier)\nfor"
* MESSAGE6="다음 장치의 NWID를 입력하십시오:\n"

* MESSAGE7=", if needed\n\n\n"
* MESSAGE7="(필요하다면)\n\n\n"

* MESSAGE8="Enter the mode for"
* MESSAGE8="다음 장치의 무선 네트워크 모드를 입력하십시오:"

* MESSAGE9="\n\n(Managed(=default), Ad-Hoc, Master,\nRepeater, Secondary, auto)\n"
* MESSAGE9="\n\n(Managed(=default), Ad-Hoc, Master,\nRepeater, Secondary, auto)\n"

* MESSAGE10="Enter channel number for"
* MESSAGE10="다음 장치의 채널을 입력하십시오:"

* MESSAGE11="\n\n(0 bis 16, empty for auto or if you want to\n enter the frequency next)\n"
* MESSAGE11="\n\n(0부터 16까지, 비워 두시면 자동 설정으로 하거나\n 다음 화면에서 주파수를 입력받습니다.)\n"

* MESSAGE12="Enter the frequency for"
* MESSAGE12="다음 장치의 주파수를 입력하십시오:"

* MESSAGE13="\n\n(e.g 2.412G, empty for auto)"
* MESSAGE13="\n\n(예 2.412G, 비워 두시면 자동 설정 합니다)"

* MESSAGE14="Enter the encryption key\nfor" 
* MESSAGE14="다음 장치의 암호화 키를 입력하십시오:\n"

* MESSAGE15="\n\n(비워 두시면 사용하지 않지만, 추천하지 않습니다!!)"

* MESSAGE16="Enter additional parameters for\n'iwconfig"
* MESSAGE16="필요하다면 iwconfig의 추가 파라미터를 입력하십시오\n"

* MESSAGE17="e.g.\n\n\nsens -80 rts 512 frag 512 rate 5.5M"
* MESSAGE17="\n\n\n예: sens -80 rts 512 frag 512 rate 5.5M"

* MESSAGE18="Enter additional parameters for\n'iwspy"
* MESSAGE18="필요하다면 iwspy의 추가 파라미터를 입력하십시오.\n"

* MESSAGE19="' if needed\n\n\n"
* MESSAGE19="\n\n\n"

* MESSAGE20="Enter additional parameters for\n'iwpriv"
* MESSAGE20="필요하다면 iwpriv의 추가 파라미터를 입력하십시오.\n"

* MESSAGE21="' if needed\n\n\n"
* MESSAGE21="\n\n\n"

* NWC="network_card_"

## ndiswrapper.sh

**번역: 박신조. Sinjo Park. kte123 AT gmail DOT com**

---

* The selected file is no *.inf file or the *.inf file is invalid, exiting.
* 선택된 파일은 inf 파일이 아니거나 잘못되었습니다. 끝냅니다.

* This is the configuration tool for the ndiswrapper utilities. \n Be aware that loading a windows driver file for your wlan \n card using this tool could freeze your system. \n \n You need matching driver.inf and driver.sys files residing on \n a mounted data medium. After the windows drivers have been \n successfully loaded via the ndiswrapper, you have to configure \n your wlan settings via iwconfig. Future releases of this script \n will include this. \n \n Please send your feedback to \<oehler@knopper.net\>
* 이 프로그램은 ndiswrapper를 설정합니다.\n 여러분의 무선 네트워크 카드의 윈도우즈 드라이버를 이 툴로 부르면\n 시스템을 중단시킬 수도 있습니다!\n \n 장치에 맞는 driver.inf 파일과 driver.sys 파일이 필요합니다.\n 윈도우즈 드라이버가 ndiswrapper를 통해서 불러와진 다음,\n iwconfig을 통해서 무선 네트워크를 설정하십시오.\n 앞으로 이 툴은 iwconfig 설정을 포함할 것입니다.\n \n \n \<oehler@knopper.net\>으로 질문을 해 주십시오.

* This is the configuration tool for the ndiswrapper utilities. \n Be aware that loading a windows driver file for your \n wlan card using this tool could freeze your system. \n \n You need matching driver.inf and driver.sys files residing on \n a mounted data medium. After the windows drivers have been \n successfully loaded via the ndiswrapper, you have to configure \n your wlan settings via iwconfig. Future releases of this script \n will include this. \n \n Please send your feedback to \n \<oehler@knopper.net\>
* 이 프로그램은 ndiswrapper를 설정합니다.\n 여러분의 무선 네트워크 카드의 윈도우즈 드라이버를 이 툴로 부르면\n 시스템을 중단시킬 수도 있습니다!\n \n 장치에 맞는 driver.inf 파일과 driver.sys 파일이 필요합니다.\n 윈도우즈 드라이버가 ndiswrapper를 통해서 불러와진 다음,\n iwconfig을 통해서 무선 네트워크를 설정하십시오.\n 이 툴의 미래 릴리즈에는 iwconfig 설정을 포함할 것입니다.\n \n \n \<oehler@knopper.net\>으로 질문을 해 주십시오.
 
* The ndiswrapper module has been loaded. You may configure your wlan card with iwconfig now.
* ndiswrapper 모듈을 불러 왔습니다. iwconfig을 통하여 무선 네트워크 카드를 설정하실 수 있습니다.

* The ndiswrapper module has been loaded but there is no new device. Perhaps NdisWrapper is not working with your driver file.
* ndiswrapper 모듈을 불러 왔지만 장치가 인식되지 않았습니다. 여러분의 드라이버 파일을 ndiswrapper에서 사용할 수 없을 수도 있습니다.
 
## gprsconnect

그런데 이 프로그램은 GPRS 사업자가 없는 국내 실정에 맞을까요? - peremen

gprsconnect의 번역작업은 중지해주시기 바랍니다. - [GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke)

* TITLE0="No modem device selected"
* TITLE0="선택된 모뎀 장치가 없습니다"

* MESSAGE0="You have not configured a device for modem / cellphone access yet. Would you like to do this now?"

* TITLE_PROVIDER="GPRS - Provider"

* MESSAGE_PROVIDER="Please select your cellphone provider:"

* TITLE_TAG="GPRS - Provider-String"

* MESSAGE_TAG="Please enter the INIT string for GPRS that your provider recommends (check your documentation):"

* NOCHANGE="(No Change)"

* TITLE1="GPRS"

* MESSAGE1="Please be aware that surfing the net over GPRS, while not being onlinetime-dependent, can cause high costs for traffic volume, depending on your provider (usually about 1 cent/kB). You can get a detailled statistic about internet traffic in the \"Root-Shell\" using the program iptraf (on ppp0). Start GPRS Internet Access now?"

* TITLE_LOG="GPRS dialup initiated, hit Ctrl-C to disconnect."

* MESSAGE_DISCONNECT="GPRS disconnected."

## pppoeconf

이 프로그램의 경우 예제를 KT/하나로통신 등으로 바꿀 필요가 았습니다.

국내의 ADSL 보급율을 생각했을때 반드시 번역해야 하는 프로그램이라고 생각합니다. 다만 제 주변에 ADSL을 사용하는 환경이 없어서...어떻게 해볼 도리가 없네요. 차후에 pppoeconf의 소스를 위키에 통째로 올려서 다른분께 부탁드리는 수 밖에 없다는 생각입니다. -[GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke)

* Most providers send the needed login information per mail. Some providers describe it in odd ways, assuming the user to input the data in their "user-friendly" setup programs. But in fact, these applications generate usuall PPP user names and passwords from the entered data. You can find the real names too and input the correct data in the dialog box.

* For example, this are methods used some german providers:

* Sample username (alias "login" or "login name"): 11111111111

* T-Online T-DSL:

* additional data:

* sample T-Onlinenummer: 222222222222 sample Mitbenutzer: 0001  

* complete username: 111111111111222222222222#0001@t-online.de  

* Telekom Business Online (DSL):

* complete username: t-online-com/111111111111@t-online-com.de  

* 1und1 uses another scheme (using above example):

* complete username: 1und1/11111111111  

* Cyberfun:

* complete username: sdt/11111111111  

* Komtel:

* additional data:

* downstream speed class: 768  

* complete username: 11111111111@FoniNet-768  

* Net Cologne:

* complete username: 11111111111@netcologne.de  

* Q-DSL:

* complete username: 11111111111@q-dsl.de  

* Versatel:

* complete username: 11111111111@VersaNet-1024k  

* Webnetix:

* complete username: sdt/11111111111  

* 'I found $number ethernet device:

* $list

* Are all your ethernet interfaces listed above? (If No, modconf will be started so you can load the card drivers manually).

* $escmsg' \

* 'I found $number ethernet devices:

* $list

* Are all your ethernet interfaces listed above? (If No, modconf will be started so you can load the card drivers manually).

* $escmsg' \

* 'Sorry, I scanned $number interface, but the Access Concentrator of your provider did not respond. Please check your network and modem cables. Another reason for the scan failure may also be another running pppoe process which controls the modem.' \ 'Sorry, I scanned $number interfaces, but the Access Concentrator of your provider did not respond. Please check your network and modem cables. Another reason for the scan failure may also be another running pppoe process which controls the modem.' \  

* If you continue with this program, the configuration file $OPTSFILE will be modified. Please make sure that you have a backup copy before saying Yes.

* Most people using popular dialup providers prefer the options 'noauth' and 'defaultroute' in their configuration and remove the 'nodetach' option. Should I check your configuration file and change these settings where neccessary?

* Please enter the username which you usually need for the PPP login to your provider in the input box below. If you wish to see the help screen, delete the username and press OK.

* Please enter the password which you usually need for the PPP login to your provider in the input box below.

* NOTE: you can see the password in plain text while typing

* You need at least one DNS IP address to resolve the normal host names. Normally your provider sends you addresses of useable servers when the connection is established. Would you like to add these addresses automatically to the list of nameservers in your local /etc/resolv.conf file? (recommended)

* Many providers have routers that do not support TCP packets with a MSS higher than 1460. Usually, outgoing packets have this MSS when they go through one real Ethernet link with the default MTU size (1500). Unfortunately, if you are forwarding packets from other hosts (i.e. doing masquerading) the MSS may be increased depending on the packet size and the route to the client hosts, so your client machines won't be able to connect to some sites. There is a solution: the maximum MSS can be limited by pppoe. You can find more details about this issue in the pppoe documentation.

* Should pppoe clamp MSS at 1452 bytes?

* If unsure, say yes.

* (If you still get problems described above, try setting to 1412 in the dsl-provider file.)

* Your PPPD is configured now. Would you like to start the connection at boot time?

* Now, you can make a DSL connection with "pon dsl-provider" and terminate it with "poff". Would you like to start the connection now?

* The DSL connection has been triggered. You can use the "plog" command to see the status or "ifconfig ppp0" for general interface info.

* Sorry, no working ethernet card could be found. If you do have an interface card which was not autodetected so far, you probably wish to load the driver manually using the modconf utility. Run modconf now?

# Services

**1차번역 : 요즘 논문에 치여 살고 계신 jhumwhale님**

---

## knoppix-terminalserver

* TITLE_CARD="Choose network device connected to client network"
* TITLE_CARD="클라이언트 네트워크에 연결된 네트워크 장치를 선택하십시오."

* MESSAGE_CARD="Available network devices:"
* MESSAGE_CARD="사용가능한 네트워크 장치:"

* TITLE_RUNCONFIG="Run netcardconfig"
* TITLE_RUNCONFIG="netcardconfig 구동"

* MESSAGE_RUNCONFIG="This network card has not been configured yet. Would you like to do this now?"
* MESSAGE_RUNCONFIG="이 네트워크 카드는 아직 설정되지 않았습니다. 지금 설정하시겠습니까?"

* TITLE_IPRANGE="IP Address range for clients"
* TITLE_IPRANGE="클라이언트의 IP 주소 범위"

* MESSAGE_IPRANGE=" Please enter the desired IP-Range of addresses that should be allocated by clients, separated by a single space.
Example:
192.168.0.101 192.168.0.200  
for addresses from 192.168.0.101 to (and including) 192.168.0.200. "

* MESSAGE_IPRANGE=" 클라이언트에 할당되어야 하는 IP 범위를 하나의 공백으로 구별해서 입력하십시오.
예:
192.168.0.101 192.168.0.200  
192.168.0.101에서 192.168.0.200까지의 주소. "

* MESSAGE_CARDS="Choose network card(s) to support/probe on client machines:"
* MESSAGE_CARDS="클라이언트 머신을 지원/탐지할 네트워크 카드를 고르십시요:"

* TITLE_CARDS="Client hardware"
* TITLE_CARDS="클라이언트 하드웨어"

* TITLE_OPTIONS="Options"
* TITLE_OPTIONS="옵션"

* MESSAGE_OPTIONS="These options determine performance and security of server and clients. You should select the webproxy option only if your server has at least 265MB of memory."
* MESSAGE_OPTIONS="이 옵션들은 서버와 클라이언트의 성능과 보안 수준을 결정합니다. 당신의 서버가 최소한 265MB 인 경우에만 웹 프록시를 선택하십시오."

* TITLE_START="Starting server"
* TITLE_START="서버 시작중"

* MESSAGE_START="The KNOPPIX-Terminal Server will now be started. You may observe the individual services (dhcpd, in.tftpd, nfsd, ...) in the process list of your system. If you want to end the terminal server, please use \"$0 stop\" or the corresponding menu item. Computers with a PXE-bootable network card should be able to boot remotely from this machine now. Start server?"
* MESSAGE_START="KNOPPIX-터미닐 서버가 지금 구동될 것입니다. 시스템의 프로세스 목록의 각기 다른 서비스들(dhcpd, in.tftpd, nfsd, ...)을 확인해도 됩니다. 터미널 서비스를 끝내고 싶으면, \"$0 stop\"을 사용하거나, 대응되는 메뉴 항목을 사용하십시요. 지금 이머신에서 원격으로 PXE-bootable 네터워크 카드가 있는 PC가 부팅될수 있어야 합니다. 서버를 시작하시겠습니까?"

* TITLE_APPEND="Client boot options"
* TITLE_APPEND="클라이언트 부트 옵션들"

* MESSAGE_APPEND="For some hardware (certain graphics adapters, monitors) it can be necessary to specify boot options (see knoppix-cheatcodes.txt). You may add a space-separated list of options and parameters here that will be added to the boot commandline on the client machines. Leave empty and hit \"OK\" if your clients don't require any."
* MESSAGE_APPEND="어떠한 하드웨어들(그래픽 카드, 모니터) 에 대해서는 부트 옵션이 필요할 수 있습니다. (knoppix-cheatcodes.txt 참고) 공백으로 구분된 다수의 옵션들과 파라미터들을 추가하실 수 있습니다. 이 옵션들과 파라미터들은 클라이언트 머신의 커맨드라인에 추가될 것입니다. 클라이언트가 어떠한 옵션이나 파라미터도 필요로 하지 않으면 아무것도 쓰지 말고 \"OK\"를 누르세요."

* ITEM_SECURE="Disable root access on client(s)"
* ITEM_SECURE="클라이언트로 root 접근 금지"

* ITEM_DNS="Nameserver cache/proxy"
* ITEM_DNS="네임서버 캐시/프록시"

* ITEM_SQUID="Transparent WWW cache/proxy"
* ITEM_SQUID="투명 WWW cache/proxy"

* ITEM_IPTABLES="IP masquerading+forwarding"
* ITEM_IPTABLES="IP 마스커레이딩+포워딩"

* ITEM_NX="NX ThinClient setup"
* ITEM_NX="NX 씬 클라이언트 설정"

## samba start

**번역: 박신조. Sinjo Park. kte123 AT gmail DOT com**

---

* MESSAGE1="Set password for user 'knoppix'";
* MESSAGE1="사용자 'knoppix'의 암호를 설정하십시오.";

* MESSAGE2="Retype password";
* MESSAGE2="암호를 다시 입력하십시오.";

* MESSAGE3="Passwords did not match";
* MESSAGE3="암호가 맞지 않습니다.";

* TITLE="Configure and start Samba";
* TITLE="삼바 설정과 시작";

* MESSAGE_EXPORTS="Export all harddrives so that they can be mounted, read and written from the remote machine?
* MESSAGE_EXPORTS="외부 기기에서 사용할 수 있도록 모든 하드 드라이브를 설정할까요?"

## firewall

**1차 번역: 알 수 없음, 교정 및 추가 번역: 박신조. Sinjo Park. kte123 AT gmail DOT com**

---

* MAIN="Main Menu"
* MAIN="주 메뉴"

* MODE="Mode"
* MODE="모드"

* HELP_EASY="Single machine, port filter w/o icmp, only outgoing connections"
* HELP_EASY="단일 기기, icmp를 사용하지 않는 포트 필터, 나가는 연결만"

* HELP_MEDIUM="Router function possible, filter and/or opening of specific ports"
* HELP_MEDIUM="라우터 기능 사용, 특정 포트 제어"

* HELP_EXPERT="Easy+Medium options plus direct editing of iptables filter rules"
* HELP_EXPERT="초급자와 중급자 옵션 모두, iptables 필터 규칙 직접 편집하기"

* ACTIVATE="Firewall Active?" 
* ACTIVATE="방화벽을 활성화시키시겠습니까?"

* ACTIVE_ON="Start Firewall now" 
* ACTIVE_ON="방화벽 지금 시작"

* ACTIVE_OFF="Deactivate Firewall"
* ACTIVE_OFF="방화벽 비활성화"

* EXT_DEV="External Devices" 
* EXT_DEV="외부 장치"

* KNOPPIX_TS="Knoppix Terminal Server"
* KNOPPIX_TS="Knoppix 터미널 서버"

* TERMINALSERVER_SETTING="Knoppix Terminal Server Setting"
* TERMINALSERVER_SETTING="Knoppix 터미널 서버 설정"

* TERMINALSERVER_HELP="The Knoppix Terminalserver can setup this computer as an internet gateway, DHCP- and Bootserver for a local network (LAN)."
* TERMINALSERVER_HELP="Knoppix 터미널 서버는 이 컴퓨터를 LAN의 인터넷 게이트웨이, DHCP 서버나 네트워크 부팅 서버로 설정할 수 있습니다."

* TERMINALSERVER_ON="Enable Knoppix TS" 
* TERMINALSERVER_ON="Knoppix TS 활성화"

* TERMINALSERVER_OFF="Disable Knoppix TS" 
* TERMINALSERVER_OFF="Knoppix TS 비활성화"

* TERMINALSERVER_SETUP="Setup Knoppix TS" 
* TERMINALSERVER_SETUP="Knoppix TS 설정"

* IPSEC_T="IPSEC transparency" 
* IPSEC_T="투명한 IPSEC"

* IPSEC_SETTING="IPSEC transparency" 
* IPSEC_SETTING="투명한 IPSEC"

* IPSEC_ON="Turn on IPSEC transparency"
* IPSEC_ON="투명한 IPSEC 사용"

* IPSEC_OFF="Turn off IPSEC transparency" 
* IPSEC_OFF="투명한 IPSEC 사용하지 않음"

* INCOMING_PORTS="Open Ports" 
* INCOMING_PORTS="포트 열기"

* OUTGOING_PORTS="Limit outgoing connections" 
* OUTGOING_PORTS="외부 연결 제한"

* START_EDITOR="Start Editor" 
* START_EDITOR="편집기 시작"

* MODE_SELECTION="Mode Selection" 
* MODE_SELECTION="모드 선택"

* EXTENDED="Extended" 
* EXTENDED="확장"

* OWN_EXT_DEV="External network devices" 
* OWN_EXT_DEV="외부 네트워크 장치"

* OWN_DESC="Specify your own, as space-separated list" 
* OWN_DESC="스페이스로 구분된 목록으로 직접 명시하기"

* NETWORK_CARD="Network card" 
* NETWORK_CARD="네트워크 카드"

* ALL_NETWORK_CARDS="All network cards" 
* ALL_NETWORK_CARDS="모든 네트워크 카드"

* PPP_DEVICE="PPP device" 
* PPP_DEVICE="PPP 장치"

* ALL_PPP_DEVICES="All PPP devices" 
* ALL_PPP_DEVICES="모든 PPP 장치"

* IPPP_DEVICE="ISDN card"
* IPPP_DEVICE="ISDN 카드"

* ALL_IPPP_DEVICES="All ISDN cards" 
* ALL_IPPP_DEVICES="모든 ISDN 카드"

* INCOMING_PORTS_SELECTION="Select open connections"
* OUTGOING_PORTS_SELECTION="Select open ports"
* ICMP_PORT="ICMP (ping et al.)"
* HTTP_PORT="WWW"
* HTTPS_PORT="Secure WWW"
* SSH_PORT="Secure Shell"
* FTP_PORT="File Transfer Protocol"
* TELNET_PORT="Telnet"
* SMTP_PORT="Send mail"
* TIME_PORT="Time server usage"
* DNS_PORT="Domain name service"
* WHOIS_PORT="Whois requets"
* POP3_PORT="Pop mail"
* POP3S_PORT="Secure pop mail"
* IMAP_PORT="IMAP Service"
* IMAPS_PORT="IMAP Service encrypted"
* MASQUERADE_SETTING="Forwarding+Masquerading"
* MASQUERADE_HELP="With this option, you allow sharing the internet connection for the local network over the firewall."
* MASQUERADE_ON="Enable router function"
* MASQUERADE_OFF="Disable router function"
* PROXY_SETTING="Proxy + Transparent WWW-Cache"
* PROXY_HELP="Starts a www-Proxy (squid) on port 8080, redirects www-requests (Port 80) to the proxy automatically."
* PROXY_ON="Turn on Proxy"
* PROXY_OFF="Turn off Proxy"
* SAVECONFIG="Save configuration"
* SAVECONFIG_HELP="Save firewall configuration and (as an option) restore + start firewall at boottime."
* SAVECONFIG_ERROR="CAUTION: In order to save your firewall configuration permanently, you have to create a \"persistent KNOPPIX-Image\" first (see KNOPPIX menu)."
* SAVECONFIG_SUCCESS="The firewall configuration was saved successfully."
* NOX_SETTING="Do you want to start with a dedicated firewall setup on reboot (i.e. no graphical environment running)?"
* LOGPART_SETTING="Persistent Logfiles"
* LOGPART_HELP="Write system logfiles to a (Linux or FAT32) harddisk partition."
* LOGPART_ERROR="Error: The \"knoppix.log\" directory could not be created in read/write mode."
* LOGPART_NONE="Don't use a persistent log directory."

# Utilities

## knoppix-dma

**번역: 김보년. Bo Nyeon, Kim. espereto AT gmail DOT com**

---

* TITLE1="KNOPPIX DMA Acelleration"
* TITLE1="KNOPPIX DMA 가속"

* MESSAGE1="This program can turn on/off DMA acelleration (direct memory access) for various IDE peripherals. This can speed up access and throughput of data up to factor 5, which is, for example, good for playing multimedia files without interruptions.
* MESSAGE1="이 프로그램은 다양한 IDE 주변 장치들의 DMA(메모리 직접 접근) 가속 기능을 켜거나 끌 수 있습니다. 이는 데이터 접근이나 전송속도를 최대 5배까지 가속화시킬 수 있습니다. 예를 들면 멀티미디어 파일을 끊김없이 재생할 때 유리합니다.

* CAUTION: There are very few computer boards around which have a defective DMA controller. On these boards, enabling DMA can lead to errors when reading data. In extreme cases, data can be lost when writing to the device with DMA enabled. USE THIS PROGRAM AT YOUR OWN RISK.
lease set a mark for all devices you want to enable DMA acelleration for."
* 주의: 결함있는 DMA 컨트롤러를 가진 컴퓨터 보드는 극히 일부에 불과하지만, 이 보드들에서 DMA를 활성화시키는 것은 데이터를 읽을 때 오류를 유발시킬 수 있습니다. 최악의 경우, 장치에 쓰기를 할 때 데이터를 잃어버릴 수도 있습니다. 이 프로그램은 위험을 감수하고 사용해야 합니다.

DMA 가속을 활성화 시킬 모든 장치를 선택하십시오."

## mkbootfloopy

**번역: 김보년. Bo Nyeon, Kim. espereto AT gmail DOT com**

---

* CONTINUE="Continue"
* CONTINUE="계속"

* CANCEL="Cancel"
* CANCEL="취소"

* TITLE0="Knoppix Bootfloppy Creator"
* TITLE0="Knoppix 부팅디스크 생성기"

* MESSAGE0="Formatting floppy disk and copying data..."
* MESSAGE0="플로피 디스크를 포맷하고 데이터를 복사하는 중..."

* TITLE1="Disk 1"
* TITLE1="디스크 1"

* MESSAGE="This program creates two floppy disks, which can be used in order to boot Knoppix on a computer that cannot boot directly from CD. Besides a current KNOPPIX-CD (3.4 and up), you will need two 1.44MB floppy disks, which be COMPLETELY ERASED, \"overformatted\" with 1.7MB, and installed with a Linux-kernel and an initial ramdisk. If you want to continue, please insert the KNOPPIX-CD into a CD-Rom drive now, mount the CD so that it is accessible, and click on \"Continue\"."
* MESSAGE="이 프로그램은 CD에서 직접 부트할 수 없는 컴퓨터에서 Knoppix로 부팅할 수 있게 해 주는 두 장의 플로피 디스크를 생성합니다. 또 현재 KNOPPIX-CD (3.4 이상)는 완전하게 비어 있는 두 장의 1.44MB 플로피 디스크를 1.7MB로 \"오버포맷\"하고, 리눅스 커널과 초기화 램디스크를 설치합니다. 계속 진행하고 싶으시면 KNOPPIX-CD를 CD-ROM 드라이브에 넣고 CD에 접근할 수 있도록 마운트 한 후 \"계속\"을 선택하십시오."

* ERROR="Can't find the KNOPPIX-CD in any CD-Rom drive (searched /cdrom*, /mnt/cdrom* and /media/cdrom*). Try again?"
* ERROR="어떤 CD-Rom 드라이브에서도 KNOPPIX-CD를 찾을 수 없습니다. (다음에서 찾았습니다 /cdrom*, /mnt/cdrom*, /media/cdrom*). 다시 시도할까요?"

* MESSAGE1="Please insert the first floppy disk now (for creating the Kernel-bootfloppy)."
* MESSAGE1="(커널-부트 플로피를 만들) 첫번째 플로피 디스크를 넣으십시오."

* FLOPPYERROR="There has been an error while writing to /dev/fd0u1722. The floppy disk is probably not writable or defective. Try again?"
* FLOPPYERROR="/dev/fd0u1722에 쓰는 작업에 오류가 발생했습니다. 플로피 디스크가 쓰기 불가능하거나 오류가 있습니다. 다시 시도할까요?"

* TITLE2="Disk 2"
* TITLE2="디스크 2"

* MESSAGE2="Please insert the second floppy disk now (for creating the initial ramdisk)."
* MESSAGE2="(초기화 램디스크를 만들) 두번째 플로피 디스크를 넣으십시오."

* SUCCESS="Creation of boot- and initrd floppy disks was successful."
* SUCCESS="부트 및 initrd 플로피 디스크를 성공적으로 만들었습니다."