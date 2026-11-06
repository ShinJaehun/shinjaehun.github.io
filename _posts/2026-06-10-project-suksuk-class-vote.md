---
layout: post
title: 쑥쑥교실투표 (Suksuk Class Vote)
info: 투표자 명단을 바탕으로 교사가 감독하는 절차형 교실 투표 시스템
tech: Ruby on Rails / PostgreSQL / Devise / Hotwire Turbo / Stimulus / RSpec
type: personal
---

쑥쑥교실투표는 교사가 학생의 투표 순서를 관리하는 **학교용 웹 투표 시스템**입니다. 학생마다 계정을 만들 필요 없이 교사가 준비한 명단으로 학급투표를 진행할 수 있으며, 전교학생회 선거에서는 학교 관리자가 선거를 준비하고 각 학급의 담임교사가 투표를 운영합니다.

## 프로젝트 페이지

* [쑥쑥교실투표 바로가기](https://vote.suksukclass.kr)
* [GitHub 저장소](https://github.com/ShinJaehun/suksuk_class_vote)

## 학급투표

교사가 투표를 준비하고, 학생이 한 명씩 참여한 뒤 결과를 확인하는 순서로 진행합니다. **이미지를 클릭하면 확대해서 볼 수 있습니다.**

<div class="image-grid">
  <div class="vote-step">
    <h3>1. 투표 준비</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote01.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote01.png' | relative_url }}" alt="학급투표 준비 화면" loading="lazy"></a>
    <p>교사는 투표 항목과 후보자 또는 선택지를 준비합니다. 참여 학생은 학급 명단을 기준으로 정해집니다.</p>
  </div>
  <div class="vote-step">
    <h3>2. 교사 진행 화면</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote02.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote02.png' | relative_url }}" alt="투표 시작 후 교사 진행 화면" loading="lazy"></a>
    <p>교사는 현재 투표자의 화면을 열어 주고, 투표가 끝나면 다음 학생으로 진행하거나 미참여 학생을 처리합니다.</p>
  </div>
  <div class="vote-step">
    <h3>3. 학생 투표 화면</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote03.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote03.png' | relative_url }}" alt="학생이 선택지를 확인하고 투표하는 화면" loading="lazy"></a>
    <p>학생은 교사가 열어 준 화면에서 선택지를 확인하고 투표합니다. 개인 계정 로그인은 필요하지 않습니다.</p>
  </div>
  <div class="vote-step">
    <h3>4. 학급투표 결과</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote04.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote04.png' | relative_url }}" alt="학급투표 결과 집계 화면" loading="lazy"></a>
    <p>투표 종료 후 참여 현황과 항목별 득표 결과를 확인합니다. 학생 개인의 선택이나 기권 여부는 공개하지 않습니다.</p>
  </div>
</div>

## 전교학생회 투표

학교 관리자가 선거를 준비하고 학급별 투표 세션을 배정하면, 각 학급의 교사가 투표를 진행합니다. 학교 관리자는 전체 진행 상태와 결과를 확인합니다.

<div class="image-grid">
  <div class="vote-step">
    <h3>1. 선거 항목과 후보자 관리</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote06.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote06.png' | relative_url }}" alt="전교투표 항목과 후보자를 관리하는 화면" loading="lazy"></a>
    <p>학교 관리자는 선거 항목과 후보자를 등록하며, 후보자 사진도 함께 사용할 수 있습니다.</p>
  </div>
  <div class="vote-step">
    <h3>2. 참여 학급 배정</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote07.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote07.png' | relative_url }}" alt="전교투표 참여 학급의 세션 배정 화면" loading="lazy"></a>
    <p>참여 학년이나 학급을 선택해 투표 세션을 배정합니다. 각 학급의 담임교사는 자신의 학급 투표를 진행합니다.</p>
  </div>
  <div class="vote-step">
    <h3>3. 학생 투표 화면</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote08.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote08.png' | relative_url }}" alt="후보자 사진이 표시된 전교투표 학생 화면" loading="lazy"></a>
    <p>학생은 후보자의 이름과 사진을 확인하며 투표합니다. 진행 방식은 학급투표와 같습니다.</p>
  </div>
  <div class="vote-step">
    <h3>4. 학급별 진행 현황</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote09.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote09.png' | relative_url }}" alt="전교투표 학급별 세션 진행 상태 화면" loading="lazy"></a>
    <p>학교 관리자는 각 학급이 투표를 어디까지 진행했는지 한곳에서 확인할 수 있습니다.</p>
  </div>
  <div class="vote-step">
    <h3>5. 전교투표 결과</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote10.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote10.png' | relative_url }}" alt="전교투표 결과 집계 화면" loading="lazy"></a>
    <p>학급별 투표 결과를 합산해 학교 전체 참여 현황과 후보별 득표 결과를 확인합니다.</p>
  </div>
</div>

## 학교 관리

학교 관리자는 선생님과 교실 정보를 관리해 학급투표와 전교투표 운영을 지원합니다.

<div class="image-grid">
  <div class="vote-step">
    <h3>1. 학교 운영 현황</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote11.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote11.png' | relative_url }}" alt="학교 운영 현황과 선생님 관리 메뉴 화면" loading="lazy"></a>
    <p>학교의 선생님·학급·학생 현황을 확인하고 선생님 계정과 배정을 관리합니다.</p>
  </div>
  <div class="vote-step">
    <h3>2. 교실 관리</h3>
    <a href="{{ '/assets/img/project_suksuk_class_vote/vote12.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_class_vote/vote12.png' | relative_url }}" alt="교실과 담임 배정을 관리하는 화면" loading="lazy"></a>
    <p>학년·반별 교실과 담당 교사를 배정합니다. 교사는 자신이 담당하는 학급의 학생 명단을 관리합니다.</p>
  </div>
</div>

## 개발 현황

Ruby on Rails와 PostgreSQL을 기반으로 구현했으며, Turbo·Stimulus로 투표 진행 화면을 갱신합니다. 교사와 학교 관리자의 권한을 구분하고, 학생 개인의 선택을 공개하지 않는 집계 방식과 투표 진행 기록의 무결성을 고려했습니다.

설계와 구현에 관한 자세한 내용은 [GitHub README](https://github.com/ShinJaehun/suksuk_class_vote#readme)에 정리했습니다.

## 저작권

* 쑥쑥교실투표는 신재훈이 만들고 있습니다.
* 쑥쑥교실투표는 GNU GPL을 따릅니다.
