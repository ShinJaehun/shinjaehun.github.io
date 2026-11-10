---
layout: post
title: 쑥쑥인덱스 (Suksuk Index)
info: 폴더 기반 미술·수업 자료 인덱스 도구 (썸네일 + 카드형 인덱스)
tech: Python / PyWebView / Vanilla JS / PyInstaller
type: personal
---

쑥쑥인덱스는 교사가 **폴더에 정리한 미술·수업 자료를 카드 형태로 모아 보고, 웹 브라우저에서 열 수 있는 인덱스 페이지를 생성하는** 데스크톱 도구입니다. 파일과 폴더를 기반으로 자료를 관리하면서, 프로그램에서 설명과 링크를 편집할 수 있도록 만들었습니다.

## 프로젝트

* [GitHub 저장소](https://github.com/ShinJaehun/suksukidx)
* [Windows 실행 파일(Releases)](https://github.com/ShinJaehun/suksukidx/releases)

## 폴더 기반 자료 구성

<a href="{{ '/assets/img/project_suksukidx/02.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_suksukidx/02.png' | relative_url }}" alt="Windows 탐색기에서 자료별로 정리된 resource 폴더" loading="lazy"></a>

먼저 `resource/` 폴더에 미술·수업 자료를 주제별로 정리합니다. 폴더 하나가 하나의 자료 카드에 대응하므로, 별도 데이터 입력 없이 기존 폴더 구조를 인덱스의 출발점으로 활용할 수 있습니다.

## 자료 관리와 카드 편집

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_suksukidx/01.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_suksukidx/01.png' | relative_url }}" alt="쑥쑥인덱스 데스크톱 앱 메인 화면과 관리 메뉴" loading="lazy"></a>
    <p><strong>메인 화면</strong> — 자료 카드와 썸네일, 관련 링크를 확인하고 상단 메뉴에서 전체 자료를 동기화·정렬·관리합니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_suksukidx/03.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_suksukidx/03.png' | relative_url }}" alt="어버이날 편지지 카드의 설명과 링크를 수정하는 화면" loading="lazy"></a>
    <p><strong>카드 내용 편집</strong> — 자료의 설명과 참고 링크를 수정하고 저장합니다. 카드별 썸네일 갱신·숨김·폴더 열기 기능도 사용할 수 있습니다.</p>
  </div>
</div>

주요 메뉴는 **Sync**(폴더·썸네일·인덱스 갱신), **편집 모드 / 전체 저장**(카드 수정·저장), **정렬**(생성순·이름순, 오름차순·내림차순), **폴더 열기**(자료 위치 확인)입니다. **전체 초기화**는 생성된 인덱스와 썸네일 등 관리 데이터를 지우는 기능이므로 주의해서 사용해야 합니다.

## 브라우저에서 활용하는 HTML 인덱스

<div class="image-grid">
  <div>
    <a href="{{ '/assets/img/project_suksukidx/05.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_suksukidx/05.png' | relative_url }}" alt="브라우저에서 연 전체 자료 인덱스 master_index.html" loading="lazy"></a>
    <p><strong>전체 인덱스</strong> — <code>master_index.html</code>에서 여러 수업 자료를 한 페이지로 찾아볼 수 있습니다.</p>
  </div>
  <div>
    <a href="{{ '/assets/img/project_suksukidx/04.png' | relative_url }}"><img class="portfolio-thumbnail portfolio-thumbnail-lg" src="{{ '/assets/img/project_suksukidx/04.png' | relative_url }}" alt="브라우저에서 연 어버이날 편지지 개별 자료 인덱스" loading="lazy"></a>
    <p><strong>개별 자료 인덱스</strong> — 각 자료 폴더에 생성된 <code>index.html</code>을 열면 해당 자료의 이미지와 링크만 확인할 수 있습니다.</p>
  </div>
</div>

이렇게 생성한 HTML 인덱스는 별도 데스크톱 앱을 열지 않아도 브라우저에서 탐색할 수 있습니다. 수업 자료를 추가하거나 변경한 뒤에는 프로그램에서 Sync를 실행해 갱신합니다.

## 개발 기록

Python과 PyWebView를 사용해 관리 화면을 구성하고, HTML·CSS·JavaScript로 자료 카드를 표시했습니다. Windows에서는 PyInstaller 기반 실행 파일로 사용할 수 있습니다. 이미지·동영상·PDF 썸네일의 자동 생성은 필요한 외부 도구가 설치된 경우 지원합니다.

구체적인 구현과 사용 환경은 [GitHub README](https://github.com/ShinJaehun/suksukidx#readme)에 정리했습니다.

## 저작권

* 쑥쑥인덱스는 신재훈이 만들었습니다.
* 쑥쑥인덱스는 GNU GPL을 따릅니다.
