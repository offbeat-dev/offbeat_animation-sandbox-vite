export default class AnimateCursor {
  constructor(element) {
    this.dom = {
      element: element,
    };
    this.target = { x: 0.5, y: 0.5 };
    this.cursor = { x: 0.5, y: 0.5 };
    this.speed = 0.05;
    this.addEventListeners();
    this.raf = requestAnimationFrame(this.render.bind(this));
  }

  addEventListeners() {
    window.addEventListener('mousemove', this.handleMouseMove.bind(this));
  }

  handleMouseMove(e) {
    this.target.x = e.clientX / window.innerWidth;
    this.target.y = e.clientY / window.innerHeight;
    if (!this.raf) this.raf = requestAnimationFrame(this.render.bind(this));
  }

  lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
  }

  render() {
    this.cursor.x = this.lerp(this.cursor.x, this.target.x, this.speed);
    this.cursor.y = this.lerp(this.cursor.y, this.target.y, this.speed);
    document.documentElement.style.setProperty('--cursor-x', this.cursor.x);
    document.documentElement.style.setProperty('--cursor-y', this.cursor.y);
    const delta = Math.sqrt(
      Math.pow(this.target.x - this.cursor.x, 2) +
        Math.pow(this.target.y - this.cursor.y, 2)
    );
    if (delta < 0.001) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
      return;
    }
    this.raf = requestAnimationFrame(this.render.bind(this));
  }
}
