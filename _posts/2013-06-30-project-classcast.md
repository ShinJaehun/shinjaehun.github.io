---
layout: post
title:  "클래스캐스트"
info: "ClassCasts"
tech: "Rails, Science, Educational software"
type: project
---

![Clastcasts Logo](/assets/img/project_classcast/classcasts.jpg)

## 프로젝트 페이지

* [프로젝트 페이지](https://github.com/ShinJaehun/ClassCasts)

## 클래스캐스트

클래스캐스트는 유튜브 수업 영상을 제공하고  평가 도구와 커뮤니티 기능을 갖춘 온라인 공개 수업 도구입니다. 루비온레일즈(이하 레일즈) 프레임웍으로 개발한  클래스캐스트를 이용하여 누구나 교육용 웹 사이트를 빠른 시간에 만들 수 있습니다. 일반적으로 컴퓨터 화면을 녹화해서 공유하는 애플리케이션을 스크린캐스트라고 하는데 교육용 영상 컨텐츠를 공유할 수 있는 웹 애플리케이션이라는 의미로 클래스캐스트라는 이름을 붙였습니다.

### 클래스캐스트 설치하기

빠르고 손쉽게 웹 애플리케이션을 제작할 수 있다는 장점에도 불구하고 루비온레일즈에 대한 가장 큰 비판은 버전에 따른 호환성이 심각하리만큼 나쁘다는 점입니다. 다른 버전에서 개발한 소스코드는 제대로 실행되지 않는다는 게 문제입니다. 실제 클래스캐스트 개발을 시작하면서 사용한 루비 패키지는 1.8, 레일즈 패키지는 3.2였지만 개발 도중에 루비는 2.0으로 레일즈는 4.0으로 업그레이드되었습니다. 따라서 아무 생각 없이 루비온레일즈 책이나 온라인 튜토리얼을 따라서 레일즈 프레임워크를 설치하면 반드시 문제가 생길 수 밖에 없습니다.

루비 패키지 버전 관리 도구인 rvm이라는 패키지를 활용하면 정확히 원하는 버전의 패키지를 시스템에 설치할 수 있습니다. 우분투와 같은 데비안 계열 리눅스 시스템(우분투 12)에 루비 1.8.7, 레일즈 3.2.13을 설치해야 합니다.

1. 먼저 rvm을 설치합니다. github에서 직접 코드를 다운로드합니다.
```console
$ bash < <(curl -sk https://raw.github.com/wayneeseguin/rvm/master/binscripts/rvm-installer)
```

2. rvm 명령을 쉘에서 사용할 수 있도록 환경변수 설정 파일 .bash_profile에 다음 스크립트를 입력합니다.
```console
$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Load RVM function' >> ~/.bash_profile
```

3. rvm 명령을 바로 실행할 수 있도록 source 명령으로 환경 설정 파일을 다시 읽어들입니다.
```console
$ source ~/.bash_profile
```

4. 루비 1.8.7 패키지를 설치합니다. 
```console
$ rvm install 1.8.7
```

5. 설치한 루비 1.8.7을 사용하겠다는 명령을 실행합니다.
```console
$ rvm 1.8.7
$ rvm --default 1.8.7
```

6. 이제 루비로 작성한 라이브러리 패키지인 루비젬을 설치합니다. rubygems 1.8을 apt-get 명령으로 설치합니다.
```console
$ sudo apt-get install rubygems1.8
```

7. gem을 이용해서 rails를 설치합니다. 이때 —version을 붙여 레일즈 3.2.13을 설치한다고 명시해야 합니다.
```console
$ gem install rails --version 3.2.13
```

8. 시스템에 설치된 루비, 레일즈 패키지 버전을 확인합니다. 루비 1.8, 레일즈 3.2.13이 설치되었나요?
```console
$ ruby -v
ruby 1.8.7 (2013-06-27 patchlevel 374) [i686-linux]
$ rails -v
Rails 3.2.13
```

9. 이번에는 데이터베이스와 관련 라이브러리를 설치합니다. 클래스캐스트가 사용하는 sqlite는 MySQL이나 PostgreSQL 보다는 가벼운 DBMS(Database Management System)입니다. sqlite 패키지와 함께 관련 라이브러리(libsqlite3-dev, libsqlite3-ruby)를 함께 설치해야 합니다.
```console
$ sudo apt-get install sqlite3 libsqlite3-dev libsqlite3-ruby
```

10. 클래스캐스트의 소스코드는 github에서 관리되고 있습니다. 시스템에 git을 설치하면 소스코드 관리가 쉬워집니다. 먼저 git을 설치하겠습니다.
```console
$ sudo apt-get install git
```

11. git을 이용해서 github에 저장된 클래스캐스트 소스코드 저장소를 홈 디렉토리에 복제합니다.
```console
$ git clone git@github.com:ShinJaehun/ClassCasts.git
```

12. 홈 디렉토리에 복제한 클래스캐스트 디렉토리로 이동하여 budle install 명령을 실행합니다. 이 명령을 실행하면 클래스캐스트에서 필요한 라이브러리를 자동으로 다운로드하고 시스템에 설치합니다.
```console
$ cd ClassCasts/
~/ClassCasts$ bundle install
```

13. 데이터베이스를 생성하고 초기 값(seed)을 생성합니다.
```console
~/ClassCasts$ rake db:migrate
~/ClassCasts$ rake db:seed
```

14. 다음 명령으로 레일즈 서버를 시작합니다. 레일즈의 기본 웹 서버 WEBrick이 실행되는 것을 확인할 수 있습니다.
```console
~/ClassCasts$ rails s
```

15. 레일즈는 포트 3000번을 사용하기 때문에 웹 브라우저 주소 창에 ‘http://localhost:3000’과 같이 포트를 명시해서 접속가능합니다.


### 클래스캐스트 설치 후 초기 설정

설치가 끝나고 처음 접속한 다음 가장 먼저 관리자 비밀번호를 변경해야 합니다. 관리자 계정은 데이터베이스 초기 값(seed)으로 제공되므로 소스코드를 통해 그대로 노출되어 있는 상태이기 때문입니다.

1. 첫 화면에서 로그인을 선택합니다.

2. 데이터베이스 초기 값으로 설정된 관리자 계정의 사용자 이름은 ‘administrator’이며 비밀번호는 ‘admin’입니다. 관리자 계정으로 로그인합니다.

3. 로그인한 다음 화면 위의 상태 표시줄이 변경된 것을 확인할 수 있습니다. 이제 관리자 비밀번호를 변경할 차례입니다. ‘administrator’를 클릭합니다.

4. 새로 설정하는 사용자 비밀번호를 적절하게 수정하고 현재 비밀번호를 입력합니다. 입력이 끝나면 사용자 정보 수정 버튼을 클릭해서 비밀번호를 변경합니다.


### 유튜브 영상 등록하기

적절한 프로그램을 활용하여 수업 영상을 녹화하고 편집합니다. 편집이 끝난 영상을 유튜브에 업로드하고 이를 클래스캐스트에 등록해보겠습니다.

1. 유튜브의 동영상 관리자 목록을 확인하면 업로드한 동영상 목록을 확인할 수 있습니다. 쑥쑥오름교실에 등록하고자 하는 영상을 선택합니다.

2. 동영상 아래쪽에서 ‘공유’ 메뉴를 선택하면 해당 영상의 주소가 나옵니다. 이 주소를 복사합니다.

3. 쑥쑥오름교실 관리자 계정만 수업 영상을 등록할 수 있는 권한을 갖고 있습니다. 영상을 등록하려면 먼저 관리자 계정으로 로그인해야 합니다. 클래스캐스트의 수업영상 메뉴를 선택하고 영상 목록 아래 New 버튼을 클릭합니다.

4. 관리자가 유튜브에 업로드한 영상의 공유 주소를 Video link에 입력하기만 하면 등록이 완료됩니다. 학년/학기, 단원, 주제 등 영상과 관련한 정보도 함께 입력하고 입력이 끝나면 Create Cast 버튼을 클릭합니다.

5. 영상이 등록된 것을 확인할 수 있습니다.

6. 관리자 계정은 수업 영상에 대한 읽기 권한뿐만 아니라 생성, 편집, 삭제 권한을 갖고 있습니다. 일반 사용자 계정과 달리 각 영상마다 Edit, Delete 버튼이 달려 있어 영상에 대한 정보를 편집하거나 영상을 삭제할 수 있습니다.

### 확인 문제 올리기


1. 문제 등록 권한은 관리자 계정만 갖고 있으므로 먼저 관리자 계정으로 로그인해야 합니다. 확인문제 메뉴에서 Add New Survey 버튼을 클릭합니다.

2. 확인문제에 대한 제목과 설명을 입력합니다. 문항을 추가하려면 Add Question 링크를 클릭합니다.

3. 문제와 정답이 포함된 해설을 입력합니다. Add Answer 링크를 클릭해서 보기를 입력할 수 있습니다. Answer에 보기의 내용을 입력하고 정답인 보기에는 Correct 체크박스에 체크합니다. 보기를 추가하고 싶으면 Add Answer를 다시 클릭하고, 문항을 추가하고 싶으면 Add Question을 클릭합니다. 입력이 끝나면 Create Survey 버튼을 클릭합니다.

4. 입력한 문제를 확인할 수 있습니다.

## 저작권

* 클래스캐스트는 GNU/GPL을 따릅니다.
* 클래스캐스트 사용 과정에서 발생하는 문제에 대해 보증하지 않습니다.


## 수상경력

* SK텔레콤 2013 모바일웹앱공모전 장려상 수상(2013. 12. 5.)

![skmwac_result](/assets/img/project_classcast/skmwac_result.jpg)
