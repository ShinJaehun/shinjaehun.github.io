(() => {
  const post = document.querySelector('.post');
  if (!post || typeof HTMLDialogElement === 'undefined') return;

  const dialog = document.createElement('dialog');
  dialog.className = 'portfolio-lightbox';
  dialog.setAttribute('aria-label', '이미지 확대');
  dialog.innerHTML = `
    <button type="button" class="portfolio-lightbox__close" aria-label="이미지 닫기">×</button>
    <img class="portfolio-lightbox__image" alt="">
  `;
  document.body.appendChild(dialog);

  const largeImage = dialog.querySelector('img');
  const closeButton = dialog.querySelector('button');
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => largeImage.removeAttribute('src'));

  post.querySelectorAll('img.portfolio-thumbnail').forEach((thumbnail) => {
    if (thumbnail.classList.contains('portfolio-original')) return;
  
    const link = thumbnail.closest('a');
    // Keep non-image links (e.g. linked logos) working normally.
    if (link && !/\.(?:png|jpe?g|gif|webp|avif|svg)(?:[?#]|$)/i.test(link.href)) return;

    const trigger = link || thumbnail;

    if (!link) {
      thumbnail.tabIndex = 0;
      thumbnail.setAttribute('role', 'button');
      thumbnail.setAttribute('aria-label', `${thumbnail.alt || '이미지'} 확대`);
    }

    const open = (event) => {
      event.preventDefault();
      largeImage.src = link ? link.href : (thumbnail.currentSrc || thumbnail.src);
      largeImage.alt = thumbnail.alt || '확대된 이미지';
      dialog.showModal();
    };

    trigger.addEventListener('click', open);
    if (!link) {
      thumbnail.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') open(event);
      });
    }
  });
})();
