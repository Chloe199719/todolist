const elements = (() => {
  const paragraph = (a) => {
    const b = document.createElement(`p`);
    b.textContent = a;
    return b;
  };
  const section = () => {
    return document.createElement(`section`);
  };
  const main = () => {
    return document.createElement(`main`);
  };
  const div = (cl) => {
    const div1 = document.createElement(`div`);
    div1.classList.add(cl);
    return div1;
  };
  const header = () => {
    return document.createElement(`header`);
  };
  const nav = () => {
    return document.createElement(`nav`);
  };
  const ul = () => {
    return document.createElement(`ul`);
  };
  const li = (a) => {
    const b = document.createElement(`li`);
    b.textContent = a;
    return b;
  };
  const img = (src, alt, width) => {
    let img1 = document.createElement(`img`);
    let a = document.createAttribute(`src`);
    let b = document.createAttribute(`alt`);
    let c = document.createAttribute(`width`);
    a.value = src;
    img1.setAttributeNode(a);
    b.value = alt;
    img1.setAttributeNode(b);
    c.value = width;
    img1.setAttributeNode(c);
    return img1;
  };
  const h1 = (a) => {
    const b = document.createElement(`h1`);
    b.textContent = a;
    return b;
  };
  const h2 = (a) => {
    const b = document.createElement(`h2`);
    b.textContent = a;
    return b;
  };
  const h3 = (a) => {
    const b = document.createElement(`h3`);
    b.textContent = a;
    return b;
  };
  const link = (href, cont) => {
    const link1 = document.createElement(`a`);
    let a = document.createAttribute(`href`);
    a.value = href;
    link1.setAttributeNode(a);
    link1.textContent = cont;
    return link1;
  };
  const span = (a, b) => {
    const span1 = document.createElement(`span`);
    span1.textContent = a;
    span1.setAttribute(`id`, b);
    return span1;
  };
  const footer = () => {
    return document.createElement(`footer`);
  };
  const button = (a) => {
    let button1 = document.createElement(`button`);
    button1.classList.add(a);
    return button1;
  };
  return {
    paragraph,
    section,
    main,
    div,
    header,
    nav,
    ul,
    li,
    img,
    h1,
    h2,
    link,
    span,
    h3,
    footer,
    button,
  };
})();

export default elements;
//
