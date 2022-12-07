import { timeline } from 'motion';

export default class AnimateSequence {
  constructor(element) {
    this.dom = {
      element: element,
    };

    this.defineSequence();
    this.runAnimation();
  }

  defineSequence() {
    this.sequence = [
      [this.dom.element, { transform: 'translate(0, 200px)' }],
      [this.dom.element, { transform: 'translate(200px, 200px)' }],
      [
        (this.dom.element,
        { transform: 'translate(200px, 200px) scale(2)' },
        { at: 'rotate' }),
      ],
    ];
  }

  runAnimation() {
    timeline(this.sequence);
  }
}
