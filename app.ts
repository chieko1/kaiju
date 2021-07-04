import Alpine from 'alpinejs';
import hepburn from 'hepburn';
import heads from './h/*.jpg';
import bodies from './b/*.jpg';
import tails from './t/*.jpg';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('kaibutsu', () => ({
        name: '',

        name_wa() {
            const syllables = hepburn.splitRomaji(this.name);
            const head = syllables.shift();
            const tail = syllables.pop();

            return [ heads[head], syllables.map((syl) => bodies[syl]), tails[tail] ];
        },

        hiragana() {
            return hepburn.toHiragana(this.name);
        },
        katakana() {
            return hepburn.toKatakana(this.name);
        },
    }));
});

Alpine.start();