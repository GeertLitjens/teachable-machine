// Copyright 2017 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/* eslint-disable consistent-return, callback-return, no-case-declarations */
import GLOBALS from './../../config.js';
import TweenLite from 'gsap';

class Wizard {
    constructor() {

        this.steps = [];
        this.steps.push({
            startTime: 0,
            stopTime: 10.4,
            triggers: [
            {
                startTime: 0,
                stopTime: 3.7,
                event: () => {
                    this.setText('Dit experiment laat je zien hoe slimme computers werken.');

                }
            },
            {
                startTime: 4.5,
                stopTime: 10.4,
                event: () => {
                    this.setText('Je kan de computer iets leren met je camera en op leuke manieren laten reageren.');
                }
            }
            ]
        });

        this.steps.push({
            startTime: 10.5,
            stopTime: 16,
            waitForEvent: true,
            triggers: [
            {
                startTime: 10.5,
                stopTime: 16,
                event: () => {
                    /*eslint-disable */
                    if (!GLOBALS.browserUtils.isMobile && !GLOBALS.isCamGranted) {
                        this.setText('Klik eerst \'Toestaan\' zodat we de camera kunnen gebruiken.');
                    }else {
                        this.play(2);
                    }
                    /* eslint-enable */
                }
            },
            {
                startTime: 12,
                stopTime: 16,
                event: () => {
                    GLOBALS.camInput.start();
                }
            }
            ]
        });


        this.steps.push({
            startTime: 16.3,
            stopTime: 49,
            waitForEvent: true,
            triggers: [
            {
                startTime: 16.3,
                stopTime: 20.6,
                event: () => {
                    this.setText('Dit zijn je voorbeelden. Nu zie je jezelf.');
                    GLOBALS.inputSection.enable();
                    GLOBALS.inputSection.highlight();

                    GLOBALS.learningSection.dim();
                    GLOBALS.outputSection.dim();
                }

            },
            {
                startTime: 20.7,
                stopTime: 25.6,
                event: () => {
                    this.setText('We hebben drie groepen: groen, paars, oranje.');
                    GLOBALS.inputSection.dehighlight();
                    GLOBALS.inputSection.dim();
                    GLOBALS.learningSection.undim();
                    GLOBALS.outputSection.dim();
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 385});
                    }
                }

            },
            {
                startTime: 22.7,
                stopTime: 23.4,
                event: () => {
                    GLOBALS.learningSection.highlightClass(0);
                }
            },
            {
                startTime: 23.4,
                stopTime: 24,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(0);
                    GLOBALS.learningSection.highlightClass(1);
                }
            },
            {
                startTime: 24,
                stopTime: 25.6,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(0);
                    GLOBALS.learningSection.dehighlightClass(1);
                    GLOBALS.learningSection.highlightClass(2);
                }
            },
            {
                startTime: 25.6,
                stopTime: 25.7,
                event: () => {
                    GLOBALS.learningSection.dehighlightClass(2);
                }
            },
            {
                startTime: 25.7,
                stopTime: 29.7,
                event: () => {
                    this.setText('Dit is de uitkomst die de slimme computer geeft.');
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 660});
                    }
                    GLOBALS.inputSection.dim();
                    GLOBALS.learningSection.dim();
                    GLOBALS.outputSection.undim();
                    GLOBALS.outputSection.highlight();
                }
            },
            {
                startTime: 29.8,
                stopTime: 36.8,
                event: () => {
                    GLOBALS.outputSection.dehighlight();
                    this.setText('Hij is nu ingesteld om met plaatjes te antwoorden, maar het kan ook met geluiden of woorden.');
                }
            },
            {
                startTime: 36.8,
                stopTime: 42.2,
                event: () => {
                    GLOBALS.inputSection.undim();
                    GLOBALS.inputSection.enable();
                    GLOBALS.learningSection.undim();
                    GLOBALS.learningSection.enable();
                    GLOBALS.outputSection.undim();
                    this.setText('Eerst laten we hem met het kattenplaatje reageren.');
                }
            },
            {
                startTime: 42.3,
                stopTime: 49,
                event: () => {
                    this.setText('Doe bijvoorbeeld je hand omhoog en druk de groene knop een paar seconden in.');
                    if (GLOBALS.browserUtils.isMobile) {
                        TweenLite.to(window, 0, {scrollTo: 175});
                    }
                }
            },
            {
                startTime: 44.8,
                stopTime: 49,
                event: () => {
                    GLOBALS.inputSection.showGif(0);
                }
            },
            {
                startTime: 46.3,
                stopTime: 49,
                event: () => {
                    window.addEventListener('class-trained', this.classTrainedEvent);
                    GLOBALS.learningSection.enableClass(0);
                    GLOBALS.learningSection.highlightClass(0);
                }
            }
            ]
        });


this.steps.push({
    startTime: 49.599999999999994,
    stopTime: 78.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 49.599999999999994,
        stopTime: 53.8,
        event: () => {
            this.setText('Je zou nu een groene balk en een kattenplaatje moeten zien.');
        }
    },
    {
        startTime: 53.9,
        stopTime: 58.599999999999994,
        event: () => {
            this.setText('Maar als je beweegt zul je zien dat dit altijd blijft staan.');
        }
    },
    {
        startTime: 55.199999999999996,
        stopTime: 58.599999999999994,
        event: () => {
            GLOBALS.inputSection.showGif(1);
        }
    },
    {
        startTime: 58.8,
        stopTime: 64.6,
        event: () => {
            GLOBALS.inputSection.hideGif(1);
            this.setText('Dat komt omdat de computer naar jouw voorbeeld kijkt en dan de groep kiest die daar het beste bij past.');
        }
    },
    {
        startTime: 64.8,
        stopTime: 72.2,
        event: () => {
            this.setText('Maar omdat je alleen geoefend hebt op de groene groep laat hij die altijd zien. We moeten dus ook op een tweede groep oefenen.');
        }
    },
    {
        startTime: 72.39999999999999,
        stopTime: 78.8,
        event: () => {
            this.setText('Dus doe nu je hand omlaag en druk een paar seconden op de paarse knop.');
        }
    },
    {
        startTime: 75.1,
        stopTime: 78.8,
        event: () => {
            GLOBALS.inputSection.showGif(2);
        }
    },
    {
        startTime: 76.3,
        stopTime: 78.8,
        event: () => {
            window.addEventListener('class-trained', this.classTrainedEvent);
            GLOBALS.learningSection.enableClass(1);
            GLOBALS.learningSection.highlightClass(1);
        }
    }
    ]
});


this.steps.push({
    startTime: 80.8,
    stopTime: 92.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 83.39999999999999,
        stopTime: 92.8,
        event: () => {
            this.setText('Beweeg nu je hand omhoog en omlaag. Je zou moeten zien dat je nu wisselt tussen het katten- en hondenplaatje.');
            GLOBALS.inputSection.hideGif(2);
        }
    },
    {
        startTime: 84.8,
        stopTime: 92.8,
        event: () => {
            GLOBALS.inputSection.showGif(3);

        }
    },
    {
        startTime: 90.8,
        stopTime: 92.8,
        event: () => {
            window.addEventListener('class-triggered', this.classTriggered.bind(this));
            GLOBALS.outputSection.startWizardMode();

        }
    }
    ]
});


this.steps.push({
    startTime: 93.2,
    stopTime: 120.89999999999999,
    waitForEvent: true,
    triggers: [
    {
        startTime: 93.2,
        stopTime: 95.6,
        event: () => {
            GLOBALS.inputSection.hideGif(3);
            this.setText('Mooi, het ziet er naar uit dat het werkt..');
        }
    },
    {
        startTime: 95.7,
        stopTime: 99.2,
        event: () => {
            this.setText('De oranje knop werkt op dezelfde manier.');
            GLOBALS.learningSection.enableClass(2);
            GLOBALS.learningSection.highlightClass(2);
        }
    },
    {
        startTime: 99.39999999999999,
        stopTime: 104.2,
        event: () => {
            GLOBALS.learningSection.dehighlightClass(2);
            this.setText('Met de x\'jes kun je opnieuw beginnen met een groep.');
        }
    },
    {
        startTime: 99.8,
        stopTime: 104.2,
        event: () => {
            GLOBALS.learningSection.dehighlightClass(2);
            GLOBALS.learningSection.highlightClassX(0);
        }
    },
    {
        startTime: 104.39999999999999,
        stopTime: 108.1,
        event: () => {
            GLOBALS.learningSection.dehighlightClassX(0);
            GLOBALS.outputSection.highlight();
            this.setText('En probeer ook de andere uitkomsten.');
            if (GLOBALS.browserUtils.isMobile) {
                TweenLite.to(window, 0, {scrollTo: 660});
            }
        }
    },
    {
        startTime: 108.2,
        stopTime: 112.39999999999999,
        event: () => {
            GLOBALS.outputSection.dehighlight();
            this.setText('Probeer nu maar een beetje uit, leer de computer maar wat je wilt.');
        }
    },
    {
        startTime: 112.6,
        stopTime: 119,
        event: () => {
            this.setText('Je kan ook nog een filmpje maken van je slimme computer als je uitgeleerd bent.');
        }
    },
    {
        startTime: 119,
        stopTime: 119.1,
        event: () => {
            this.setText('');
            this.skip();
            gtag('event', 'wizard_finish');            
        }
    }
    ]
});


this.steps.push({
    startTime: 131,
    stopTime: 138.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 131,
        stopTime: 138.8,
        event: () => {
            this.setText('De computer werkt het beste met meer dan 30 voorbeelden per groep. Probeer er nog een paar op te nemen.');
        }
    }
    ]
});

this.steps.push({
    startTime: 125.5,
    stopTime: 130.8,
    waitForEvent: true,
    triggers: [
    {
        startTime: 125.5,
        stopTime: 130.8,
        event: () => {
            this.activateWebcamButton.style.display = 'block';
            this.setText('Het lijkt erop dat de camera het niet doet, probeer deze pagina te verversen.');
        }
    }
    ]
});

this.wizardRunning = false;
this.currentIndex = 0;

this.timer = document.querySelector('.wizard__timer');
this.timerFill = this.timer.querySelector('.wizard__timer-fill');
this.percentage = 0;
this.duration = 0;
this.baseTime = 0;
this.currentTime = 0;

this.stopTime = 0;
this.audio = new Audio();
this.loadedEvent = this.loaded.bind(this);
this.audio.addEventListener('canplaythrough', this.loadedEvent);
this.audio.src = 'assets/wizard/voice-over.mp3';

this.wizardWrapper = document.querySelector('.wizard__wrapper');
this.bar = document.querySelector('#wizard');
this.machine = document.querySelector('.machine');
this.textContainer = this.bar.querySelector('.wizard__text-inner');
this.soundButton = this.bar.querySelector('.wizard__sound-button');
this.soundIcon = this.soundButton.querySelector('.wizard__sound-icon');
this.skipButton = this.bar.querySelector('.wizard__skip-button');

this.skipButton.addEventListener('click', this.skip.bind(this));
this.soundButton.addEventListener('click', this.toggleSound.bind(this));

this.classTrainedEvent = this.classTrained.bind(this);

this.numTriggered = 0;
this.lastClassTriggered = null;

this.activateWebcamButton = document.getElementById('input__media__activate');
this.activateWebcamButton.style.display = 'none';
if (this.activateWebcamButton) {
  this.activateWebcamButton.addEventListener('click', () => {
    location.reload();
});
}


this.resizeEvent = this.size.bind(this);
this.scrollEvent = this.scroll.bind(this);
window.addEventListener('resize', this.resizeEvent);
window.addEventListener('scroll', this.scrollEvent);


this.resizeEvent();
this.scrollEvent();
}

stickBar() {
    this.bar.classList.add('wizard--fixed');
    this.stickyBar = true;
}

unstickBar() {
    this.bar.classList.remove('wizard--fixed');
    this.stickyBar = false;
}

size() {
    this.wizardWrapper.style.height = this.bar.offsetHeight + 'px';

    if (this.machine.offsetHeight + this.bar.offsetHeight - window.pageYOffset > window.innerHeight) {
        this.stickBar();
    }else if (this.stickyBar) {
        this.unstickBar();
    }
}

scroll() {
    if (this.machine.offsetHeight + this.bar.offsetHeight - window.pageYOffset <= window.innerHeight) {
        this.unstickBar();
    }else {
        this.stickBar();
    }
}


classTriggered(event) {
    let id = event.detail.id;

    if (id !== this.lastClassTriggered) {
        this.lastClassTriggered = id;
        this.numTriggered += 1;
    }

    if (this.numTriggered > 4 && !this.triggerTimer) {
        GLOBALS.outputSection.stopWizardMode();
        this.triggerTimer = setTimeout(() => {
            this.play(5);
        }, 1500);
    }
}

classTrained(event) {
    let id = event.detail.id;
    let numSamples = event.detail.numSamples;

    if (numSamples < 30) {
        this.play(6);
    }
    
    if (id === 'green' && numSamples >= 30 && !this.greenDone) {
        this.greenDone = true;
        GLOBALS.learningSection.dehighlightClass(0);
        GLOBALS.inputSection.hideGif(0);
        this.play(3);
        window.removeEventListener('class-trained', this.classTrainedEvent);
    }

    if (id === 'purple' && numSamples >= 30) {
        GLOBALS.learningSection.dehighlightClass(1);
        GLOBALS.inputSection.hideGif(1);
        this.play(4);
        window.removeEventListener('class-trained', this.classTrainedEvent);
    }
}

toggleSound(event) {
    event.preventDefault();
    if (this.muted) {
        this.unmute();
    }else {
        this.mute();
    }
}

ended() {
    this.playing = false;
    this.stopAudioTimer();

    if (this.currentIndex === 0) {
        let that = this;

        if (localStorage.getItem('webcam_status') === null) {
            this.play(1);
            this.webcamEvent = this.webcamStatus.bind(this);
            window.addEventListener('webcam-status', this.webcamEvent);
        }else if (localStorage.getItem('webcam_status') === 'granted') {
            GLOBALS.camInput.start();
            this.play(2);
        }else if (localStorage.getItem('webcam_status') === 'denied') {
            this.play(7);

        }
    }

}


timeUpdate() {
    if (this.audio.currentTime > (this.currentStep.stopTime) && this.playing === true) {
        this.audio.pause();
        this.ended();
    }

    if (this.currentStep) {
        if (this.currentStep.waitForEvent) {
            this.waitingForEvent = true;
        }

        this.currentStep.triggers.forEach((step) => {
            if (this.audio.currentTime >= step.startTime && this.audio.currentTime <= step.stopTime && step.playing !== true) {
                step.playing = true;
                if (step.event) {
                    this.currentTrigger = step;
                    step.event();
                }
            }
        });
    }


    let percentage = (this.audio.currentTime - this.baseTime) / this.duration;
    if (percentage > 1) {
        percentage = 0;
        this.timer.style.opacity = 0;
    }else {
        this.timer.style.opacity = 1;
        this.timerFill.style.width = 80 * percentage + 'px';
    }

    this.audioTimer = requestAnimationFrame(this.timeUpdate.bind(this));

}

play(index) {
    this.currentIndex = index;
    this.currentStep = this.steps[index];
    this.audio.currentTime = this.currentStep.startTime;
    this.playing = true;
    this.audio.play();
}

touchPlay() {
    this.audio.play();
    this.audio.pause();
}

loaded() {
    this.audio.removeEventListener('canplaythrough', this.loadedEvent);
}

startAudioTimer() {
    this.stopAudioTimer();
    this.audioTimer = requestAnimationFrame(this.timeUpdate.bind(this));
}

stopAudioTimer() {
    if (this.audioTimer) {
        cancelAnimationFrame(this.audioTimer);
    }
}

mute() {
    this.audio.muted = true;
    this.muted = true;
    this.soundIcon.classList.remove('wizard__sound-icon--on');
}

unmute() {
    this.audio.muted = false;
    this.muted = false;
    this.soundIcon.classList.add('wizard__sound-icon--on');
}

setText(message, isTip) {
    let text = message;
    this.textContainer.textContent = message;

    if (message.length > 0) {
        this.timerFill.style.width = 0 + 'px';
        if (this.currentTrigger) {
            this.baseTime = this.currentTrigger.startTime;
            this.duration = this.currentTrigger.stopTime - this.baseTime;
        }
    }
}


clear() {
    this.textContainer.textContent = '';
}

webcamStatus(event) {
    let that = this;
    if (event.detail.granted === true) {
        localStorage.setItem('webcam_status', 'granted');
        this.play(2);
        window.removeEventListener('webcam-status', this.webcamEvent);
    }else {
        localStorage.setItem('webcam_status', 'denied');
        this.play(7);
    }
}

start() {
    let that = this;
    this.wizardRunning = true;
    this.soundButton.style.display = 'block';
    this.play(0);
    this.startAudioTimer();
    GLOBALS.launchScreen.destroy();
    gtag('event', 'wizard_start');        
}

startCamera() {
    GLOBALS.camInput.start();
}

skip(event) {
    if (event) {
        event.preventDefault();
        gtag('event', 'wizard_skip_mid');        
    }

    if (this.wizardRunning) {
        TweenLite.to(this.wizardWrapper, 0.3, {
            height: 0,
            onComplete: () => {
                this.wizardWrapper.style.display = 'none';
            }
        });
    }else {
        this.wizardWrapper.style.display = 'none';
    }

    this.stopAudioTimer();
    this.audio.pause();
    this.clear();
    this.skipButton.style.display = 'none';
    this.soundButton.style.display = 'none';
    window.removeEventListener('class-trained', this.classTrainedEvent);
    setTimeout(() => {
        GLOBALS.camInput.start();
    }, 500);
    GLOBALS.inputSection.enable();
    GLOBALS.inputSection.hideGif(0);
    GLOBALS.inputSection.hideGif(1);
    GLOBALS.inputSection.hideGif(2);
    GLOBALS.inputSection.hideGif(3);
    GLOBALS.inputSection.undim();
    GLOBALS.learningSection.dehighlight();
    GLOBALS.learningSection.dehighlightClass(0);
    GLOBALS.learningSection.dehighlightClass(1);
    GLOBALS.learningSection.dehighlightClass(2);
    GLOBALS.learningSection.enable();
    GLOBALS.learningSection.enableClass(0);
    GLOBALS.learningSection.enableClass(1);
    GLOBALS.learningSection.enableClass(2);
    GLOBALS.learningSection.undim();
    GLOBALS.outputSection.dehighlight();
    GLOBALS.outputSection.enable();
    GLOBALS.outputSection.undim();

    window.removeEventListener('resize', this.resizeEvent);
    window.removeEventListener('scroll', this.scrollEvent);
}

}

export default Wizard;
/* eslint-enable consistent-return, callback-return, no-case-declarations */