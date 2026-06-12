---
layout: post
title:  "쑥쑥수학"
info: "곱셈과 나눗셈의 계산 과정을 단계별로 연습하는 안드로이드 수학 학습 앱"
tech: "Android, Java, Kotlin, Jetpack Compose, Math, Practice, Educational software"
type: project
---

![쑥쑥수학타이틀](/assets/img/project_suksuk/타이틀.png)

## 프로젝트 페이지

* [기존 GitHub 저장소](https://github.com/ShinJaehun/SukSuk)
* [리뉴얼 GitHub 저장소](https://github.com/ShinJaehun/suksuk_math)
* [앱 설치하기](https://play.google.com/store/apps/details?id=com.shinjaehun.suksuk) : 플레이스토어에서 '쑥쑥수학'이라고 검색해도 됩니다.

## 시연 영상

[![시연영상](/assets/img/project_suksuk/screenshot.png)](https://youtu.be/tXKDCS_LiBY)

## 쑥쑥수학

쑥쑥수학은 초등 수학에서 곱셈과 나눗셈의 계산 과정을 단계별로 연습할 수 있도록 만든 안드로이드 기반 학습용 소프트웨어입니다.

기존의 많은 수학 학습 앱은 문제를 풀고 답을 제출한 뒤 정답 여부를 확인하는 방식으로 구성되어 있습니다. 반면 쑥쑥수학은 계산 결과만 확인하는 것이 아니라, 학생이 곱셈과 나눗셈의 풀이 과정을 처음부터 끝까지 직접 따라가며 연습할 수 있도록 만든 것이 특징입니다.

## 주요 연습 내용

쑥쑥수학에서는 다음과 같은 계산 과정을 연습할 수 있습니다.

* 곱하는 수가 두 자리 이상인 곱셈
* 나누는 수가 두 자리 이상인 나눗셈
* 받아 올림이 있는 곱셈
* 받아 내림이 있는 나눗셈
* 곱셈과 나눗셈의 계산 순서 익히기
* 받아 올림과 받아 내림 처리 과정 연습하기

## 왜 만들었나

학생들이 곱셈과 나눗셈을 어려워하는 이유는 단순히 정답을 몰라서가 아니라, 계산 과정의 각 단계에서 무엇을 해야 하는지 헷갈리기 때문인 경우가 많습니다.

쑥쑥수학은 학생들이 안드로이드 기반 스마트폰이나 태블릿 PC를 활용해 곱셈과 나눗셈의 계산 순서, 받아 올림, 받아 내림 처리 과정을 스스로 연습할 수 있도록 제작되었습니다.

## 리뉴얼

쑥쑥수학 리뉴얼 버전은 기존 쑥쑥수학의 핵심 목표를 유지하면서, 최근 Android 개발 환경에 맞게 다시 구성한 프로젝트입니다.

기존 버전은 Java, XML Layout, Activity, Fragment 중심으로 만들어졌습니다. 리뉴얼 버전에서는 Kotlin과 Jetpack Compose를 사용해 화면을 선언적으로 구성하고, 계산 로직과 화면 상태 관리를 분리하는 방향으로 구조를 정리했습니다.

리뉴얼 버전의 핵심 방향은 다음과 같습니다.

* 기존 쑥쑥수학의 단계별 계산 연습 목표 유지
* Java/XML/Fragment 중심 구조에서 Kotlin + Jetpack Compose 구조로 전환
* 화면 코드와 계산 로직 분리
* 곱셈과 나눗셈 문제 유형을 Pattern으로 정리
* 계산 과정을 여러 Phase로 나누어 관리
* ViewModel 중심의 상태 관리
* 진행 중인 문제 상태 저장과 복원
* 문제 공급 구조 분리
* Hilt 기반 의존성 주입

리뉴얼 버전은 완전히 다른 앱을 새로 만든 것이 아니라, 기존 쑥쑥수학의 방향을 유지하면서 장기적으로 유지보수하고 확장할 수 있도록 내부 구조를 다시 정리한 프로젝트입니다.

쑥쑥수학 리뉴얼 과정에서는 ChatGPT를 개발 보조 도구로 활용했습니다. 기존 Java/XML/Fragment 중심 구조의 한계를 정리하고, Kotlin과 Jetpack Compose 기반 구조로 전환하는 과정에서 계산 단계, 화면 상태, ViewModel, Domain 로직 분리 방향을 함께 점검했습니다.

## 리뉴얼 버전 기술 스택

리뉴얼 버전은 다음 기술을 중심으로 구성되어 있습니다.

* Kotlin
* Jetpack Compose
* Material3
* ViewModel
* StateFlow
* SavedStateHandle
* Hilt
* KSP
* Gradle Kotlin DSL
* Java 17
* Android SDK 35

## 저작권

* 쑥쑥수학은 신재훈이 만들었습니다.
* 쑥쑥수학은 GNU/GPL을 따릅니다.