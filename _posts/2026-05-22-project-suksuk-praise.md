---
layout: post
title: 쑥쑥칭찬통장 (Suksuk Praise)
info: 교실 단위 칭찬 기록, 쿠폰 보상, 학생 PIN 로그인, 메시지 관리 시스템
tech: Ruby on Rails / Hotwire Turbo / Stimulus / PostgreSQL / Devise / Pundit / Action Cable
type: personal
---

쑥쑥칭찬통장은 교사가 학생에게 칭찬을 기록하고 쿠폰을 발급하며, 학생은 자신의 칭찬과 쿠폰을 확인할 수 있는 **교실 보상 관리 웹 애플리케이션**입니다. 교실 운영, 교사 통계, 학생 개인 화면을 분리해 각자의 활동에 맞게 사용할 수 있도록 만들었습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/suksuk_praise)

## 교실 운영과 학교 관리

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_suksuk_praise/praise01.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_praise/praise01.png' | relative_url }}" alt="교실 학생별 칭찬 관리 화면" loading="lazy"></a>
    <p><strong>교실 화면</strong> — 교사는 학생별 카드를 보면서 수업 중 바로 칭찬을 기록하고, 학생 로그인과 교실 관리 기능을 이용합니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_suksuk_praise/praise02.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_praise/praise02.png' | relative_url }}" alt="학교 운영 및 휴일 관리 화면" loading="lazy"></a>
    <p><strong>관리자 화면</strong> — 학교의 교실과 교사 현황을 확인하고, 학교 휴일 등 운영 정보를 관리합니다.</p>
  </div>
</div>

## 학생 화면

학생은 별도의 일반 사용자 계정 대신 이름과 PIN으로 로그인해 자신의 칭찬 기록과 쿠폰을 확인할 수 있습니다.

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_suksuk_praise/praise03.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_praise/praise03.png' | relative_url }}" alt="학생 개인 칭찬 및 쿠폰 관리 화면" loading="lazy"></a>
    <p><strong>개인 화면</strong> — 로그인한 학생은 자신이 받은 칭찬, 보유 쿠폰과 쿠폰 사용 기능을 확인합니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_suksuk_praise/praise05.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_praise/praise05.png' | relative_url }}" alt="학생의 일주일 칭찬 기록 그래프" loading="lazy"></a>
    <p><strong>주간 칭찬 기록</strong> — 학생은 일주일 동안 받은 칭찬과 쿠폰 내역을 날짜별로 살펴봅니다.</p>
  </div>
</div>

## 교사 통계

<a href="{{ '/assets/img/project_suksuk_praise/praise04.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_suksuk_praise/praise04.png' | relative_url }}" alt="교사가 확인하는 학급별 칭찬 및 쿠폰 집계 화면" loading="lazy"></a>

교사는 학급에서 받은 칭찬, 쿠폰 발급과 사용 현황을 한눈에 확인하고 학생별 기록을 비교할 수 있습니다.

## 개발 현황

Ruby on Rails와 PostgreSQL 기반으로 구현했으며, Turbo·Stimulus 등을 사용해 교실 화면의 상호작용을 구성했습니다. 학생 PIN 로그인, 칭찬 기록, 쿠폰 보상, 메시지 및 권한 구분을 지원합니다. 자세한 구현과 설계 내용은 [GitHub README](https://github.com/ShinJaehun/suksuk_praise#readme)에 정리했습니다.

## 저작권

* 쑥쑥칭찬통장은 신재훈이 만들고 있습니다.
* 쑥쑥칭찬통장은 GNU GPL을 따릅니다.
