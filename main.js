import './styles/main.scss';
import AnimateIntro from './components/AnimateIntro.js';
import AnimatePresence from './components/AnimatePresence.js';
import AnimateCursor from './components/AnimateCursor.js';
import AnimateText from './components/AnimateText.js';
import AnimateSequence from './components/AnimateSequence.js';

new AnimateSequence(document.querySelector('.animate-sequence'));
new AnimateText(document.querySelector('.animate-text'));
// new AnimateIntro(document.querySelector('.animate-intro'));
// new AnimatePresence(document.querySelector('.animate-presence'));
// new AnimateCursor(document.querySelector('.animate-cursor'));
