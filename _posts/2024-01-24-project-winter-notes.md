---
layout: post
title: 겨울노트 (Winter Notes)
info: 눈 내리는 UI를 더한 Android 노트앱을 Room DB, Firebase, Jetpack Compose 구조로 실험한 프로젝트
tech: Android / Kotlin / Room / Firebase / Jetpack Compose / Hilt / StateFlow / ViewBinding / Coroutine / Coil
type: personal
---

## 겨울노트

겨울노트는 Android 노트앱 구조를 학습하기 위해 만든 프로젝트입니다. 기본적으로는 흔한 노트앱입니다. 제목과 본문을 입력하고, 이미지를 포함한 노트를 저장하고, 목록에서 다시 확인하는 구조입니다. 하지만 단순한 CRUD 노트앱에 그치지 않고, 앱 화면 위에 눈송이가 내려오는 시각 효과를 넣어 겨울 분위기를 표현했습니다.

이후 같은 아이디어를 바탕으로 Room DB 버전, Firebase 버전, Room과 Firebase를 함께 고려한 버전, 그리고 Jetpack Compose와 Hilt를 사용한 Room Compose 버전을 만들며 Android 저장 구조와 앱 아키텍처를 학습했습니다.

## 프로젝트 페이지

* [WinterNotes](https://github.com/ShinJaehun/WinterNotes)
* [WinterNotesV2](https://github.com/ShinJaehun/WinterNotesV2)
* [WinterNotesRoom](https://github.com/ShinJaehun/WinterNotesRoom)
* [WinterNotesRoomCompose](https://github.com/ShinJaehun/WinterNotesRoomCompose)
* [WinterNotesFirebase](https://github.com/ShinJaehun/WinterNotesFirebase)

## 프로젝트 방향

겨울노트는 하나의 완성형 상용 앱이라기보다, Android 앱 구조를 단계적으로 익히기 위한 학습 프로젝트군입니다.

처음에는 Room DB를 사용한 로컬 노트앱으로 시작했습니다. 이후 사용자 개념, 클라우드 저장, 이미지 저장, Firebase 인증, Firestore, Firebase Storage 같은 기능을 실험하기 위해 여러 버전으로 나누어 구현했습니다. 마지막에는 Room 기반 로컬 저장 구조를 Jetpack Compose, Hilt, StateFlow 중심으로 다시 구성한 `WinterNotesRoomCompose` 버전도 만들었습니다.

즉, 겨울노트의 핵심은 “노트앱” 자체보다, 같은 노트앱을 여러 저장 방식과 구조로 다시 만들어 보면서 Android 앱 구조를 이해하는 데 있습니다.

## 주요 특징

* 눈 내리는 UI 효과

  * 앱 화면 위에 눈송이가 내려오는 시각 효과를 구현했습니다.
  * 여러 개의 눈송이 객체를 만들고, Coroutine을 사용해 위치를 계속 갱신합니다.
  * 각 눈송이는 랜덤한 위치와 속도로 움직이며 화면 아래로 내려가면 다시 위에서 나타납니다.
  * 일반적인 노트앱에 겨울 분위기를 더하기 위한 실험입니다.

* Room 기반 로컬 저장

  * 초기 버전과 Room 버전에서는 Room DB를 사용해 노트를 로컬에 저장합니다.
  * 노트에는 제목, 본문, 작성 시간, 이미지 경로, 색상, 웹 링크 같은 정보를 저장할 수 있습니다.
  * DAO를 통해 노트 조회, 저장, 삭제, 검색 흐름을 구성했습니다.

* Firebase 기반 클라우드 저장 실험

  * Firebase 버전에서는 Firebase Auth, Firestore, Firebase Storage를 활용한 구조를 실험했습니다.
  * 사용자 모델을 두고, 작성자 정보를 포함한 노트 모델을 구성했습니다.
  * 로컬 저장이 아니라 클라우드 저장을 전제로 한 노트앱 구조를 확인했습니다.

* 이미지가 포함된 노트

  * 노트에 이미지 경로나 이미지 데이터를 포함할 수 있도록 모델을 구성했습니다.
  * Coil을 활용해 이미지 로딩을 처리할 수 있도록 구성했습니다.
  * 로컬 이미지와 클라우드 이미지 저장 방식을 각각 실험했습니다.

* Android 앱 구조 학습

  * Android Navigation으로 화면 전환을 구성했습니다.
  * ViewBinding을 사용해 XML View에 접근했습니다.
  * Gradle Kotlin DSL과 version catalog를 적용한 버전도 만들었습니다.
  * KSP, Room compiler, Firebase plugin 등 Android 프로젝트 설정을 여러 방식으로 정리해 보았습니다.

## 버전별 저장소

* WinterNotes

  * 가장 초기 버전입니다.
  * Room 기반 노트 저장과 기본 CRUD 구조를 구현했습니다.
  * 눈 내리는 UI 효과가 포함되어 있습니다.
  * Android View, Navigation, Room, Coroutine을 연습한 버전입니다.

* WinterNotesV2

  * 두 번째 실험 버전입니다.
  * Gradle Kotlin DSL과 version catalog를 사용했습니다.
  * Room과 Firebase를 함께 고려한 혼합 실험 버전입니다.
  * 사용자 모델과 작성자 개념을 추가했습니다.

* WinterNotesRoom

  * Room DB 중심으로 다시 정리한 버전입니다.
  * Firebase 요소를 걷어내고 로컬 저장 구조에 집중했습니다.
  * 도메인 모델과 Room 저장 모델을 나누는 방향을 실험했습니다.
  * Room 기반 Android 노트앱 구조 학습용 버전입니다.

* WinterNotesRoomCompose

  * Room 기반 로컬 저장 구조를 Jetpack Compose와 Hilt 중심으로 다시 구현한 버전입니다.
  * XML View와 ViewBinding 대신 Compose UI와 Material3를 사용했습니다.
  * `INoteRepository` 인터페이스, Hilt ViewModel, StateFlow 기반 상태 관리 구조를 실험했습니다.
  * 겨울노트 계열에서 가장 현대적인 Android 앱 구조를 학습한 버전입니다.

* WinterNotesFirebase

  * Firebase 중심으로 분리한 버전입니다.
  * Firebase Auth, Firestore, Firebase Storage를 사용한 클라우드 저장 구조를 실험했습니다.
  * 사용자별 노트와 이미지 저장 가능성을 확인하기 위한 버전입니다.

## 기본 사용 흐름

1. 앱을 실행합니다.
2. 노트 목록을 확인합니다.
3. 새 노트를 작성합니다.
4. 제목, 본문, 색상, 이미지, 웹 링크 등을 입력합니다.
5. 노트를 저장합니다.
6. 저장된 노트를 목록에서 다시 확인합니다.
7. 필요한 경우 노트를 수정하거나 삭제합니다.
8. 앱 화면 위에는 눈송이 효과가 계속 표시됩니다.

## 기술 스택

* Android
* Kotlin
* Jetpack Compose
* Material3
* Room
* Firebase Auth
* Firebase Firestore
* Firebase Storage
* Hilt
* StateFlow
* Android Navigation
* ViewBinding
* Coroutine
* Coil
* KSP
* Gradle Kotlin DSL
* Version Catalog
* Material Components
* ConstraintLayout

## 개발 과정

겨울노트는 처음부터 하나의 완성된 앱으로 만든 프로젝트라기보다, Android 앱 구조를 공부하기 위해 여러 번 다시 만든 학습 프로젝트입니다.

처음에는 Room DB를 사용해 노트를 저장하는 기본 Android 노트앱으로 시작했습니다. 여기에 화면 위로 눈송이가 내려오는 효과를 직접 구현하면서, 단순한 CRUD 앱에 작은 감성적 UI 요소를 더해 보았습니다.

이후 같은 노트앱 아이디어를 바탕으로 구조를 여러 방향으로 나누어 실험했습니다. `WinterNotesV2`에서는 Room과 Firebase를 함께 고려했고, `WinterNotesRoom`에서는 Room 중심 로컬 저장 구조로 정리했으며, `WinterNotesFirebase`에서는 Firebase 기반 클라우드 저장 구조를 따로 실험했습니다. 이후 `WinterNotesRoomCompose`에서는 Room 기반 로컬 저장 구조를 Jetpack Compose, Hilt, StateFlow 중심으로 다시 구성했습니다.

이 과정에서 Android Clean Architecture와 앱 계층 분리에 대해 공부했습니다. 모든 버전이 완성된 Clean Architecture 구현이라고 보기는 어렵지만, 도메인 모델과 저장 모델을 분리하고, 로컬 저장과 클라우드 저장의 책임을 나누며, Repository 계층과 테스트 가능한 구조가 왜 필요한지 학습하는 계기가 되었습니다. 특히 Compose 버전에서는 UI 상태, 이벤트 처리, Repository 인터페이스, 의존성 주입을 더 명확히 나누는 방향을 실험했습니다.

## 현재 상태

* WinterNotes 초기 버전 구현
* Room 기반 노트 저장 실험
* Firebase 기반 클라우드 저장 실험
* Room 전용 버전 분리
* Firebase 전용 버전 분리
* Jetpack Compose + Room 버전 분리
* 눈 내리는 UI 효과 구현
* Android Navigation, ViewBinding, Coroutine 사용
* Jetpack Compose, Hilt, StateFlow 사용
* 이미지가 포함된 노트 모델 실험
* Android 아키텍처 학습용 프로젝트군으로 보관

## 앞으로의 개선 방향

* 다섯 저장소의 역할을 README로 명확히 정리
* 포트폴리오에서는 하나의 “겨울 노트” 프로젝트로 묶어 소개
* Room 버전과 Firebase 버전의 구조 비교 문서 작성
* Compose 버전을 기준으로 현재 Android 구조를 다시 점검
* Repository 계층과 Mapper 구조 정리
* ViewModel 기반 UI 상태 관리 강화
* 이미지 저장 정책 정리
* 테스트 코드 추가
* Clean Architecture 관점에서 구조 재정리

## 저작권

* 겨울노트는 신재훈이 만들었습니다.
* 겨울노트는 GNU GPL을 따릅니다.
