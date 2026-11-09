---
layout: post
title: 제주체험학습 (FieldTrip)
info: 제주 현장체험학습 장소를 인물·역사·자연환경 주제로 정리한 Android 앱
tech: Android / Java / SQLite / AppCompat / Design Support Library
type: personal
---

제주체험학습은 제주 지역의 역사와 자연환경을 직접 살펴보고, 현장체험학습 경험을 기록할 수 있도록 만든 **안드로이드 앱**입니다. 장소별 설명과 관련 교과 정보를 제공하고, 위치 확인부터 체험 소감 작성·공유까지 이어지도록 구성했습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/FieldTrip)

## 앱 시작

<a href="{{ '/assets/img/project_fieldtrip/FT01.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT01.png' | relative_url }}" alt="제주체험학습 시작 화면" loading="lazy"></a>

첫 화면에서 **사람들·역사·자연환경** 중 관심 있는 주제를 선택해 제주 체험학습 장소를 살펴볼 수 있습니다.

## 주제별 체험학습 장소

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT02.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT02.png' | relative_url }}" alt="제주 역사 체험학습 장소 목록" loading="lazy"></a>
    <p><strong>역사</strong> — 박물관과 역사 유적 등 제주 지역의 역사·문화 장소를 소개합니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT03.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT03.png' | relative_url }}" alt="제주 자연환경 체험학습 장소 목록" loading="lazy"></a>
    <p><strong>자연환경</strong> — 오름, 동굴, 해안 지형 등 제주의 자연환경과 관련된 장소를 소개합니다.</p>
  </div>
</div>

## 장소 정보와 길찾기

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT04.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT04.png' | relative_url }}" alt="주상절리 설명과 관련 교과·단원 안내 화면" loading="lazy"></a>
    <p><strong>장소 상세 정보</strong> — 장소의 특징과 설명, 관련 교과·단원 정보를 확인할 수 있습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT05.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT05.png' | relative_url }}" alt="주상절리 위치를 지도에서 확인하는 화면" loading="lazy"></a>
    <p><strong>위치 안내</strong> — 지도에서 체험학습 장소의 위치를 확인하고 길찾기에 활용할 수 있습니다.</p>
  </div>
</div>

## 체험 소감 기록과 공유

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT06.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT06.png' | relative_url }}" alt="방문 날짜와 체험 소감, 사진을 입력하는 화면" loading="lazy"></a>
    <p><strong>체험 소감 작성</strong> — 방문 날짜와 느낀 점을 기록하고 사진을 첨부할 수 있습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_fieldtrip/FT07.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/FT07.png' | relative_url }}" alt="체험학습 기록을 다른 SNS에 공유하는 화면" loading="lazy"></a>
    <p><strong>소감 공유</strong> — 현장에서 작성한 기록과 사진을 다른 SNS에 공유할 수 있습니다.</p>
  </div>
</div>

## 개발 구조

<a href="{{ '/assets/img/project_fieldtrip/diagram.png' | relative_url }}"><img class="portfolio-thumbnail" src="{{ '/assets/img/project_fieldtrip/diagram.png' | relative_url }}" alt="제주체험학습 앱의 Android 클래스 관계 다이어그램" loading="lazy"></a>

Java와 SQLite를 사용해 장소 정보를 관리했습니다. 화면을 담당하는 Activity·Fragment와 장소 데이터를 조회하는 DAO·DBHelper의 관계를 클래스 다이어그램으로 정리했습니다.

2016년에 개발한 프로젝트로, 현재 Android 개발 환경에서는 그대로 실행하기 어렵습니다. 상세 구현과 기존 프로젝트 구조는 [GitHub README](https://github.com/ShinJaehun/FieldTrip#readme)에 남겨 두었습니다.

## 저작권

* 제주체험학습은 신재훈이 만들었습니다.
* 제주체험학습은 GNU GPL을 따릅니다.
