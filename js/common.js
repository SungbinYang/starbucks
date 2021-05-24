const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 검색 아이콘을 클릭했을 때 이벤트 핸들러 함수
searchEl.addEventListener('click', function() {
    // 포커스 강제 적용
    searchInputEl.focus();
});

// 검색창 포커스되었을 때 이벤트 핸들러 함수
searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

// 검색창 포커스가 해제되었을 때 이벤트 핸들러 함수
searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

// 현재 연도 구하기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();