class UI {
  createElement(type, className, eventType, eventListener) {
    const element = document.createElement(type);
    element.className = className;

    element.addEventListener(eventType, eventListener);

    return element;
  }
}
