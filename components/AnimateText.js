import SplitType from 'split-type';
import { animate, stagger } from 'motion';
import { gsap } from 'gsap';

export default class AnimateText {
  constructor(element) {
    this.dom = {
      element: element,
    };
    this.splitText = new SplitType(this.dom.element, { types: 'chars' });
    this.addEventListeners();
    this.runAnimation();
  }

  addEventListeners() {
    this.dom.element.addEventListener(
      'mouseenter',
      this.enterAnimation.bind(this)
    );
    this.dom.element.addEventListener(
      'mouseleave',
      this.exitAnimation.bind(this)
    );
  }

  enterAnimation() {
    gsap.to(this.splitText.chars, {
      y: 10,
      stagger: {
        each: 0.05,
      },
    });
  }
  exitAnimation() {
    gsap.to(this.splitText.chars, {
      y: 0,
      stagger: {
        each: 0.05,
      },
    });
    // animate(
    //   this.splitText.chars,
    //   { y: 0 },
    //   { duration: 0.5, delay: stagger(0.05) }
    // );
  }
}
