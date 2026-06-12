---
layout: post
title: 쑥쑥인덱스 (Suksuk Index)
info: 폴더 기반 미술·수업 자료 인덱스 도구 (썸네일 + 카드형 인덱스)
tech: Python / PyWebView / Vanilla JS / PyInstaller
type: personal
---

## 쑥쑥인덱스

쑥쑥인덱스는 미술·수업 자료를 **폴더 기반으로 정리**하고, 자동으로 **썸네일과 카드형 인덱스 페이지**를 생성·관리할 수 있는 Python + PyWebView 기반 데스크톱 도구입니다. 교사가 직접 자료를 관리하면서 HTML/CSS/JavaScript 지식 없이도 파일 정리 → Sync → 바로 활용 가능한 인덱스 페이지를 만드는 것을 목표로 합니다.

## 프로젝트 페이지

* [GitHub 저장소](https://github.com/ShinJaehun/suksukidx)
* [Releases](https://github.com/ShinJaehun/suksukidx/releases)

## 주요 특징

* 파일 시스템 기반 자료 관리

  * `resource/` 폴더를 기준으로 자료를 구성합니다.
  * 폴더 하나를 하나의 카드, 즉 하나의 자료 묶음으로 다룹니다.

* 자동 썸네일 생성

  * 이미지, PDF, 비디오 자료의 썸네일 생성을 지원합니다.
  * `ffmpeg`, `poppler` 같은 외부 도구가 설치된 경우에만 자동 생성됩니다.
  * 외부 도구가 없어도 Sync, 편집, 인덱싱 등 핵심 기능은 정상 동작합니다.

* 카드형 인덱스 UI

  * 자료별 제목, 설명, 메모, 링크를 편집할 수 있습니다.
  * 브라우저 UI를 PyWebView로 감싼 데스크톱 도구 형태로 실행합니다.

* Sync 기반 반영

  * 자료를 추가하거나 삭제한 뒤 Sync 버튼으로 인덱스를 갱신합니다.
  * 전체 자료를 모은 `master_index.html`과 각 자료 폴더 전용 `index.html`을 생성합니다.

* Windows Portable 지원

  * Python이 설치되지 않은 Windows 환경에서도 실행할 수 있도록 PyInstaller 기반 실행 파일을 제공합니다.

## 기본 사용 흐름

1. `resource/` 폴더에 수업 자료를 정리합니다.
2. `suksukidx.exe`를 실행합니다.
3. UI에서 **Sync**를 클릭합니다.
4. 필요한 경우 썸네일을 자동 생성합니다.
5. 카드 설명과 메모를 편집합니다.
6. 생성된 인덱스 페이지를 수업 자료 탐색용으로 활용합니다.

## 기술 스택

* Python
* PyWebView
* Vanilla JavaScript
* HTML / CSS
* PyInstaller
* ffmpeg / poppler

## 개발 과정

쑥쑥인덱스 개발 과정에서는 ChatGPT를 개발 보조 도구로 활용했습니다. 폴더 기반 자료 관리 구조, 카드형 인덱스 UI, Sync 흐름, 썸네일 생성 방식, Windows Portable 배포 구조를 정리하는 과정에서 설계 검토와 리팩터링 방향을 함께 점검했습니다.

## 현재 상태

* v1.0 안정화 완료
* Sync / 썸네일 / 편집 / 전체 초기화 동작 검증 완료
* 구조 정리 완료
* Registry 기반 SSOT 구조는 향후 확장 후보로 보류

## 저작권

* 쑥쑥인덱스는 신재훈이 만들었습니다.
* 쑥쑥인덱스는 GNU GPL을 따릅니다.
