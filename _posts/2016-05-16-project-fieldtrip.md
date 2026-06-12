---
layout: post
title: 제주체험학습 (FieldTrip)
info: 제주 현장체험학습 장소를 인물·역사·자연환경 주제로 정리한 Android 앱
tech: Android / Java / SQLite / AppCompat / Design Support Library
type: personal
---

## 제주체험학습

제주체험학습은 제주 지역 현장체험학습 장소를 주제별로 정리해 보여주는 Android 앱입니다.

학생들이 제주 지역의 역사, 인물, 자연환경과 관련된 장소를 살펴보고, 현장체험학습이나 지역화 수업에서 활용할 수 있도록 만들었습니다. 각 장소에는 설명, 관련 교과 및 단원, 위치 정보, 대표 이미지 등을 연결하는 것을 목표로 했습니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/FieldTrip)

## 주요 특징

* 주제별 장소 분류

  * 사람들
  * 역사
  * 자연환경

  메인 화면에서 세 주제 중 하나를 선택하면 해당 주제에 맞는 제주 체험학습 장소 목록으로 이동합니다.

* 장소 목록과 상세 정보

  * 주제별 장소 목록을 보여줍니다.
  * 장소를 선택하면 상세 화면으로 이동합니다.
  * 상세 화면에서는 장소 이름, 대표 이미지, 설명을 확인할 수 있습니다.

* 교과 연계 정보

  * 장소 설명 안에 관련 교과와 단원 정보를 함께 넣었습니다.
  * 단순 관광지 소개가 아니라 수업에서 활용할 수 있는 지역화 자료 앱을 목표로 했습니다.

* SQLite 기반 로컬 데이터

  * 장소 정보는 앱 내부 SQLite DB에 저장했습니다.
  * 장소 유형, 이름, 이미지, 위치, 설명, 상세 정보, 방문 여부, 점수, 사용자 입력, 사용자 사진 필드를 두었습니다.

* 위치 정보 연동 고려

  * 장소 데이터에 `geo:` 형식의 위치 정보를 저장했습니다.
  * 지도 앱과 연결할 수 있는 구조를 고려했습니다.

* 옛 Android UI 구조 실험

  * AppCompat과 Android Design Support Library를 사용했습니다.
  * CollapsingToolbarLayout, Toolbar, ListView 등을 사용해 당시 Material Design 스타일의 화면을 구성했습니다.

## 기본 사용 흐름

1. 앱을 실행합니다.
2. 메인 화면에서 사람들, 역사, 자연환경 중 하나를 선택합니다.
3. 선택한 주제에 해당하는 장소 목록을 확인합니다.
4. 장소를 선택합니다.
5. 장소 상세 화면에서 설명, 관련 교과, 위치, 대표 이미지를 확인합니다.
6. 필요하면 지도 앱과 연결해 위치를 확인합니다.

## 기술 스택

* Android
* Java
* SQLite
* SQLiteOpenHelper
* AppCompat
* Android Support Design Library
* CollapsingToolbarLayout
* Toolbar
* ListView
* AsyncTask
* XML Layout
* Gradle

## 개발 과정

제주체험학습은 제주 지역 현장체험학습 자료를 앱으로 정리해 보려는 시도에서 만든 프로젝트입니다.

제주에는 수업과 연결할 수 있는 역사, 인물, 자연환경 관련 장소가 많습니다. 하지만 현장체험학습 자료로 활용하려면 장소 이름만 나열하는 것보다, 장소 설명과 관련 교과, 위치 정보가 함께 정리되어 있어야 합니다.

이 앱에서는 제주 체험학습 장소를 사람들, 역사, 자연환경 세 범주로 나누고, 각 장소의 설명과 교과 연계 정보를 SQLite DB에 넣어 앱 안에서 확인할 수 있도록 했습니다.

현재 기준으로 보면 오래된 Android 앱입니다. Android Support Library, ListView, SQLiteOpenHelper, AsyncTask 같은 구조를 사용하고 있으며, 최신 Android 앱 구조와는 거리가 있습니다. 하지만 당시에는 Android 로컬 DB, Activity 전환, 주제별 목록, 상세 화면, Material Design 계열 UI를 직접 구현해 본 의미 있는 프로젝트였습니다.

## 현재 상태

* 2016년에 만든 옛 Android Java 앱입니다.
* 제주 체험학습 장소를 주제별로 보여주는 기본 구조를 구현했습니다.
* SQLite 기반 로컬 데이터 구조를 사용했습니다.
* 현재 Android SDK와 Gradle 환경 기준으로는 리뉴얼이 필요합니다.
* 포트폴리오에서는 “제주 지역화 수업/현장체험학습 앱의 초기 시도”로 보관합니다.

## 앞으로의 개선 방향

* Kotlin 기반 재작성
* AndroidX / Material3 전환
* Jetpack Compose UI 적용
* Room 기반 로컬 DB 구성
* 장소 데이터 관리 방식 개선
* 지도 앱 연동 개선
* 체험학습 코스 기능 추가
* 장소별 활동지, 퀴즈, 사진 기록 기능 추가
* 교사용 제주 지역화 수업 자료 앱으로 확장

## 저작권

* 제주체험학습은 신재훈이 만들었습니다.
* 제주체험학습은 GNU GPL을 따릅니다.

