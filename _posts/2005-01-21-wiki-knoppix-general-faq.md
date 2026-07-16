---
layout: post
title: "Knoppix General FAQ"
info: "KLDP Wiki에 옮겨 두었던 Knoppix 일반 FAQ 번역 문서"
tech: "Linux, Knoppix, FAQ"
type: "위키 문서"
original_url: "https://wiki.kldp.org/wiki.php/Knoppix/GeneralFAQ"
original_site: "KLDP Wiki"
date_note: "정확한 최초 작성일은 확인 중이며, 현재 확인 가능한 날짜 단서를 기준으로 정리."
---

> 이 글은 예전에 KLDP Wiki에 작성하거나 옮겨 두었던 문서를 포트폴리오 보존 목적으로 옮긴 것이다.  
> 일부 오래된 외부 링크는 현재 접속되지 않을 수 있다.

  - 원문 : <http://www.knoppix.net/wiki/General_FAQ>
  - 번역 : 신재훈([GunSmoke](https://wiki.kldp.org/wiki.php/GunSmoke) : gunsmoke.shin at gmail.com)  

## Q : 대체 크노픽스가 무엇입니까?

A : 크노픽스는 누구나 자유롭게 복사/배포할 수 있는 부팅 가능한 CD입니다. 크노픽스는 [GNU/Linux](http://www.gnu.org/gnu/linux-and-gnu.html)용 소프트웨어를 포함하고 있으며 그래픽 카드, 사운드 카드, SCSI, USB 기기 등 다수의 주변 장치에 대한 자동 하드웨어 감지 기능을 제공합니다. 크노픽스는 리눅스 데모를 위해서, 교육용 CD로, 시스템 응급 복구를 위한 도구로, 상용 소프트웨어의 데모를 실연하기 위한 환경으로 사용할 수 있습니다. 이를 위해 그 어떤 설치 과정도 필요하지 않습니다.

## Q : 최소 사양이 어떻게 됩니까?

A : 인텔 호환 CPU(i486 혹은 그 이후에 출시된 제품)와 텍스트 환경을 위한 16MB의 RAM, KDE 그래픽 환경을 위한 96MB의 RAM(여러가지 사무용 소프트웨어를 사용하기 위해서는 최소 128MB의 RAM을 권합니다.) 부팅 가능한 CD롬 드라이브 혹은 플로피 디스켓 드라이브와 일반 CD롬 드라이브(IDE/ATAPI나 SCSI), 표준 SVGA 호환 그래픽 카드, 시리얼 및 PS/2 표준 마우스, IMPS/2 호환 USB 마우스

## Q : 어째서 내가 가장 좋아하는 소프트웨어인 xyz는 CD에 포함되어 있지 않습니까? 다음 버전에 그 소프트웨어를 추가해줄 수 없습니까? 그것은 공짜란 말입니다\!

A : 사용 가능한 공간이 약 700MB 정도로 제한되어 있습니다. 용량 문제는 제쳐두더라도 크노픽스에 채택되기 위해서는 반드시 무료, 무상이어야 한다는 소프트웨어 라이센스 조건을 갖추어야 합니다. 모든 소프트웨어들의 라이센스는 크노픽스 CD를 무료로 내려받거나 수정, 복사할 수 있게 보장되어야 합니다. CD 내에 포함될 수 없는 상용 소프트웨어는 크노픽스에 채택될 수 없습니다. 적어도 무료로 사용 가능하고 내려받을 수 있는 버전의 크노픽스에서는 안됩니다. 또한 내려받기 전에 별도의 동의 조건을 수락하도록 강제하는 라이센스(저작권 사용료를 지불했다 하더라도)와 CD를 상업적으로 배포하는 것을 금지하는 라이센스가 적용됩니다.(이를테면 개인적인 용도의 수정, 복사 및 CD 발송에 대한 대가를 지불해야 하는 것이 상업적인 배포에 해당합니다.) CD에 있는 대부분의 응용프로그램들은 GPL 혹은 그와 유사한 오픈소스 라이센스를 따르고 있습니다.(GPL과 관련해서는 [The GNU GPL License Page](http://www.gnu.org/licenses/gpl.html)를 참고하십시오.) 예외적으로 개발 회사에 의해 이진 형식으로만 배포되는 소프트웨어일지라도 상용 배포본에서는 물론 비상용 배포본에서도 사용할 수 있도록 필수적인 제약이 없는 자유 라이센스로 풀린다면 허용됩니다. 다음 버전의 크노픽스가 해당 소프트웨어를 포함할 수 있도록 개발팀에게 요청하기 전에 소프트웨어 라이센스를 확인하시기 바랍니다.

## Q : 어떻게 크노픽스를 하드디스크에 설치합니까?

[DebianInstallUsingKnoppix](http://wiki.kldp.org/wiki.php/DebianInstallUsingKnoppix)를 참고하세요.

## Q: '크노픽스'라는 이름은 어디에서 유래되었습니까?

A: 크노픽스의 창시자 Klaus Knopper에서 비롯되었습니다.

## Q: 어떻게 크노픽스를 시작합니까?

A: CD를 시작하기 위해서 컴퓨터의 바이오스를 CD로 부팅할 수 있도록 설정하고 CD를 삽입하여 부팅합니다. 만일 CD 부팅을 지원하지 않는다면 부팅 디스켓을 사용합니다. CD 내에 있는 Knoppix/boot.img를 이용하여 부팅 디스켓을 만들 수 있습니다. 크노픽스 플랫폼과 관련된 추가 정보나 특정 프로젝트에 특화된 버전의 크노픽스를 찾는다면 [Knoppix\_Customizations](http://knoppix.net/wiki/Knoppix_Customizations)를 참고합니다.

## Q: 크노픽스를 사용하는데 어떤 라이센스의 영향을 받습니까?

A: 특별히 명시되어 있지 않는한 CD 내의 소프트웨어들은 [Free Software](http://en.wikipedia.org/wiki/Free_software) [GNU GENERAL PUBLIC LICENSE](http://en.wikipedia.org/wiki/GNU_General_Public_License)에 의해 배포됩니다. 그 밖에 이와 유사한 [Open Source](http://www.opensource.org/docs/definition.php) 라이센스가 있습니다. 이는 승인자가 동일한 라이센스를 받고 있는 동안 어떠한 제약없이 CD를 복사, 수정, 재배포 및 재판매할 수 있다는 것을 의미합니다. CD 내에 있는 표준 패키지의 소스 코드는 각각 최초 제공자(데비안, 레드햇, 맨드레이크의 FTP 서버)들로부터 구할 수 있습니다. 크노픽스 커널이나 자동 하드웨어 인식 기능과 같은 특정 구성요소에 대한 소스 코드는 CD의 /usr/src 디렉토리에 없을 경우 [크노픽스 홈 페이지](http://www.knopper.net/download/knoppix/)로부터 내려받을 수 있습니다. GPL이 명시된 개별 패키지들은 다른 라이센스(네스케이프처럼)에 의해 배포될 수도 있습니다. 라이센스와 관련해서 궁금한 점은 help 세션이나 각 소프트웨어 패키지의 DEB-database(dpkg -p package-name)에서 찾아볼 수 있습니다.

## Q: Microsoft Windows를 사용중입니다. 어떻게 해야하죠?

A: Windows가 설치되어 있는 채로 크노픽스로 부팅해서 사용할 수 있습니다. 크노픽스는 설치되어 있는 Windows에 영향을 미치지 않습니다. 크노픽스를 다 사용하고난 뒤에 CD를 꺼내고 재부팅하면 다시 Windows로 부팅될 것입니다.

## Q: 리눅스를 사용중입니다. 어떻게 해야하죠?

A: 마찬가지로 크노픽스를 사용할 수 있습니다. 단지 크노픽스 사용이 끝난 후에 CD를 꺼내고 재부팅하기만 하면 다시 리눅스로 부팅될 것입니다.

## Q: 특정 파일 시스템이 지원됩니까? 특정 하드웨어에 대한 커널 모듈이 존재합니까?

A: 크노픽스 5.0.1의 커널과 커널 모듈에 대한 정보는 다음과 같습니다.

    /proc/version: Linux version 2.6.17 (root@Knoppix) (gcc version 4.0.4 20060507 (prerelease) (Debian 4.0.3-3)) #4 SMP PREEMPT Wed May 10 13:53:45 CEST 2006

[List Of Modules](http://www.knoppix.net/wiki/List_Of_Modules)

[Kernel config file](http://www.knoppix.net/wiki/Kernel_config_file)

## Q: 그 밖에 알아두어야할 것들은?

A: 크노픽스는 실험적인 소프트웨어입니다. Knoppix.net 및 Knppixko.kldp.net은 특정 하드웨어 및 소프트웨어에서 크노픽스를 사용함으로서 발생할 수 있는 데이터 손실을 비롯한 직, 간접적인 위험에 대해 책임을 지지 않습니다. 몇몇 국가에서는 CD 내의 특정 암호화 관련 소프트웨어 및 다른 구성요소가 수출규제에 의해 제한되고 있습니다. 따라서 이러한 국가에서는 GPL의 영향에도 불구하고 자유롭게 배포될 수 없습니다. 만일 이러한 조건에 동의할 수 없다면 크노픽스를 사용하거나 재배포할 수 없습니다.
