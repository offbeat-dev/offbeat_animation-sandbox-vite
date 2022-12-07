export default class AnimateCursor {
  constructor(element) {
    this.dom = {
      element: element,
    };
    this.target = { x: 50, y: 50 };
    this.position = { x: 0, y: 0 };
    this.speed = 0.025;
    this.raf = requestAnimationFrame(this.render.bind(this));
  }

  lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  render() {
    this.position.x = this.lerp(this.position.x, this.target.x, this.speed);
    this.position.y = this.lerp(this.position.y, this.target.y, this.speed);
    this.dom.element.style.transform = `translate3D(calc(${this.position.x}vw - 50%), calc(${this.position.y}vh - 50%), 0)`;

    // const delta = Math.sqrt(
    //   Math.pow(this.target.x - this.position.x, 2) +
    //     Math.pow(this.target.y - this.position.y, 2)
    // );

    // if (delta < 0.001) {
    //   cancelAnimationFrame(this.raf);
    //   this.raf = null;
    //   return;
    // }

    this.raf = requestAnimationFrame(this.render.bind(this));
  }
}
