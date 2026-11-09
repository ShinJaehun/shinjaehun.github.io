---
layout: post
title: 겨울노트 (Winter Notes)
info: 눈 내리는 UI를 더한 Android 노트앱을 Room DB, Firebase, Jetpack Compose 구조로 실험한 프로젝트
tech: Android / Kotlin / Room / Firebase / Jetpack Compose / Hilt / StateFlow / ViewBinding / Coroutine / Coil
type: personal
---

겨울노트는 Android 노트앱 구조를 학습하기 위해 만든 프로젝트입니다. 기본적으로는 흔한 노트앱입니다. 제목과 본문을 입력하고, 이미지를 포함한 노트를 저장하고, 목록에서 다시 확인하는 구조입니다. 하지만 단순한 CRUD 노트앱에 그치지 않고, 앱 화면 위에 눈송이가 내려오는 시각 효과를 넣어 겨울 분위기를 표현했습니다.

처음에는 로컬 저장 중심의 노트앱으로 시작했고, 이후 같은 아이디어를 바탕으로 **Room DB 버전**, **Firebase 버전**, **Room과 Firebase를 함께 고려한 버전**, 그리고 **Jetpack Compose + Hilt 기반 Room 버전**까지 확장하면서 Android 저장 구조와 앱 아키텍처를 단계적으로 익혔습니다.

## 프로젝트 페이지

* [WinterNotes](https://github.com/ShinJaehun/WinterNotes)
* [WinterNotesV2](https://github.com/ShinJaehun/WinterNotesV2)
* [WinterNotesRoom](https://github.com/ShinJaehun/WinterNotesRoom)
* [WinterNotesRoomCompose](https://github.com/ShinJaehun/WinterNotesRoomCompose)
* [WinterNotesFirebase](https://github.com/ShinJaehun/WinterNotesFirebase)

## 대표 화면

포트폴리오에서는 겨울노트 계열 프로젝트 중 **대표적인 사용 흐름 화면**을 묶어서 소개합니다.

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_winter_notes/winternotes01.PNG' | relative_url }}">
      <img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_winter_notes/winternotes01.PNG' | relative_url }}" alt="겨울노트 로그인 화면" loading="lazy">
    </a>
    <p><strong>로그인 화면</strong> — Firebase 인증을 실험한 버전에서는 이메일과 비밀번호로 로그인할 수 있도록 구성했습니다. 눈송이가 내려오는 효과를 화면 전반에 적용해 겨울 분위기를 표현했습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_winter_notes/winternotes02.PNG' | relative_url }}">
      <img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_winter_notes/winternotes02.PNG' | relative_url }}" alt="겨울노트 노트 작성 화면" loading="lazy">
    </a>
    <p><strong>노트 작성</strong> — 제목, 카테고리, 본문, 이미지를 포함한 노트를 작성하는 화면입니다. 단순 텍스트 메모를 넘어 이미지가 포함된 기록을 저장하는 흐름을 실험했습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_winter_notes/winternotes03.jpg' | relative_url }}">
      <img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_winter_notes/winternotes03.jpg' | relative_url }}" alt="겨울노트 노트 목록 화면" loading="lazy">
    </a>
    <p><strong>노트 목록</strong> — 저장된 노트를 카드 형태로 보여 주는 화면입니다. 검색과 목록 탐색을 중심으로, 사용자가 작성한 기록을 다시 확인할 수 있도록 구성했습니다.</p>
  </div>
</div>

## 주요 특징

* **눈 내리는 UI 효과**
  * 앱 화면 위에 눈송이가 내려오는 시각 효과를 추가했습니다.
  * 일반적인 노트앱에 감성적 UI 요소를 더하기 위한 실험입니다.

* **여러 저장 구조 실험**
  * Room 기반 로컬 저장 구조를 구현했습니다.
  * Firebase 기반 사용자 인증 및 클라우드 저장 구조를 실험했습니다.

* **이미지가 포함된 노트**
  * 텍스트뿐 아니라 이미지가 포함된 노트를 다룰 수 있도록 구성했습니다.
  * 기록 앱에서 자주 필요한 메모 + 이미지 조합을 연습했습니다.

* **Android 아키텍처 학습**
  * Android Navigation, ViewBinding 기반 구조를 익혔습니다.
  * Jetpack Compose, Hilt, StateFlow 중심 구조도 별도 버전으로 실험했습니다.

## 개발 기록

겨울노트는 하나의 상용 서비스라기보다, Android 앱 구조를 공부하기 위해 여러 번 다시 만든 실험 프로젝트입니다.

초기 버전에서는 Room DB를 사용해 기본적인 노트 저장과 CRUD 흐름을 구현했습니다. 이후 같은 아이디어를 바탕으로 Firebase 인증과 클라우드 저장, 이미지 처리, 사용자별 노트 구조 등을 나누어 실험했습니다. 또 Compose 버전에서는 UI 상태, 이벤트 처리, Repository 인터페이스, 의존성 주입을 더 명확히 분리하는 방향을 시도했습니다.

즉, 겨울노트는 **“노트앱”이라는 익숙한 주제를 바탕으로 Android 저장 구조와 앱 아키텍처를 단계적으로 학습한 프로젝트**라고 볼 수 있습니다.

## 저작권

* 겨울노트는 신재훈이 만들었습니다.
* 겨울노트는 GNU GPL을 따릅니다.