onscroll = () => (document.querySelector('.bottom-edge-gradient').style.opacity = scrollY + innerHeight >= document.documentElement.scrollHeight ? 0 : 1);
