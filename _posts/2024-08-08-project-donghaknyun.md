---
layout: post
title: 동학년 (Donghaknyun)
info: 동학년 교사들을 위한 준비물 예약 및 학년 공동 일정 공유 시스템
tech: Ruby on Rails / Turbo / Stimulus / SortableJS / PostgreSQL
type: personal
---

동학년은 같은 학년 선생님들이 **공동 준비물과 수업 일정을 함께 확인하고 예약**할 수 있도록 만든 Ruby on Rails 웹 애플리케이션입니다. 준비물을 카드로 등록한 뒤 날짜·층·교시별 일정판에 끌어다 놓아, 여러 학급이 사용하는 자료와 시간을 쉽게 조율할 수 있습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/donghaknyun)

## 로그인하지 않아도 볼 수 있는 공동 일정

<a href="{{ '/assets/img/project_donghaknyun/donhaknyun00.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_donghaknyun/donhaknyun00.png' | relative_url }}" alt="로그인 전에도 공용 TODO와 학급별 준비물 예약을 확인할 수 있는 주간 일정표" loading="lazy"></a>

로그인하지 않은 방문자도 **공용 준비물 목록과 주간 예약 현황**을 살펴볼 수 있습니다. 일정은 월요일부터 금요일까지 표시되며, 각 날짜를 3층·4층과 교시별로 나누어 어떤 학급이 무엇을 사용하도록 예약했는지 보여줍니다.

## 준비물 카드 등록

<a href="{{ '/assets/img/project_donghaknyun/donhaknyun01.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_donghaknyun/donhaknyun01.png' | relative_url }}" alt="관리자가 공용 TODO 목록에 준비물 카드를 추가하는 입력 창" loading="lazy"></a>

관리자는 공용 TODO 영역에서 준비물이나 수업 활동을 카드로 등록합니다. **이름과 설명을 입력**하면 카드가 공용 목록에 추가되고, 선생님들은 이 카드를 필요한 날짜와 교시로 드래그해 예약할 수 있습니다. 이때 공용 카드 원본은 남고 일정판에 예약 카드가 복제됩니다.

## 교사별 준비물 예약과 권한

<a href="{{ '/assets/img/project_donghaknyun/donhaknyun03.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_donghaknyun/donhaknyun03.png' | relative_url }}" alt="4반 교사로 로그인했을 때 자신의 예약 카드에만 관리 버튼이 표시되는 주간 일정표" loading="lazy"></a>

각 선생님은 다른 학급의 예약까지 **함께 확인**할 수 있지만, **자신이 등록한 예약 카드만 이동하거나 삭제**할 수 있습니다. 화면에는 여러 반의 카드가 함께 보이므로 같은 준비물을 서로 다른 시간에 사용하도록 조정하기 쉽습니다.

## 관리자 권한과 다음 주 일정

<a href="{{ '/assets/img/project_donghaknyun/donhaknyun04.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_donghaknyun/donhaknyun04.png' | relative_url }}" alt="관리자로 로그인했을 때 모든 예약 카드의 관리 버튼과 다음 주 일정 생성 버튼이 표시되는 화면" loading="lazy"></a>

관리자는 **모든 학급의 예약 카드를 관리**할 수 있습니다. 또한 `New schedules` 버튼으로 **다음 주 일정판을 생성**하고, 생성된 주차의 일정표로 이동해 예약 상황을 확인할 수 있습니다.

## 공용 준비물 편집

<a href="{{ '/assets/img/project_donghaknyun/donhaknyun05.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_donghaknyun/donhaknyun05.png' | relative_url }}" alt="공용 TODO 카드에 수정 및 삭제 아이콘이 표시된 관리자 화면" loading="lazy"></a>

관리자는 공용 TODO 카드의 **이름과 내용을 수정하거나 불필요한 카드를 삭제**할 수 있습니다. 교사들이 같은 준비물 목록을 공유하면서 각자의 수업 시간에 예약하는 구조입니다.

## 개발 기록

Rails와 PostgreSQL을 기반으로 구현했으며, **Turbo·Stimulus·SortableJS**로 카드 등록과 Drag & Drop 예약을 처리했습니다. 교사와 관리자 사이에는 권한을 구분해, 학년 전체의 예약 현황은 공유하되 다른 교사의 예약을 임의로 변경하지 못하도록 구성했습니다.

구체적인 데이터 구조와 구현 내용은 [GitHub README](https://github.com/ShinJaehun/donghaknyun#readme)에 정리했습니다.

## 저작권

* 동학년은 신재훈이 만들었습니다.
* 동학년은 GNU GPL을 따릅니다.
