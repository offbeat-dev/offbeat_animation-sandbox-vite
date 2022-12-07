export default class AnimatePresence {
  constructor(element) {
    this.dom = {
      element: element,
      animationTrigger: element.querySelector('.animation-trigger'),
      animatedElement: element.querySelector('.animated-element'),
    };
    this.isDisplayed = false;
    this.dom.animatedElement.style.transitionDuration = '1s';
    this.dom.animatedElement.style.transitionProperty = 'all';
    this.addEventListeners();
  }

  addEventListeners() {
    this.dom.animationTrigger.addEventListener(
      'click',
      this.toggleDisplay.bind(this)
    );
  }

  toggleDisplay() {
    if (!this.isDisplayed) {
      this.dom.animatedElement.style.visibility = 'visible';
      this.dom.animatedElement.style.opacity = '1';
    } else {
      this.dom.animatedElement.style.visibility = 'hidden';
      this.dom.animatedElement.style.opacity = '0';
    }
    this.isDisplayed = !this.isDisplayed;
  }
}
