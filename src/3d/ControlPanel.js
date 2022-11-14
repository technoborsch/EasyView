import {GUI} from "three/addons/libs/lil-gui.module.min";

GUI.TEXT_CLOSED = 'Закрыть панель управления';
GUI.TEXT_OPEN = 'Открыть панель управления';

/**
 * Class with GUI that allows auth to manipulate loaded model - sectioning, elements hiding and so on.
 */
export default class ControlPanel {
    /**
     * @param { Engine } engine Engine instance that will be manipulated.
     * @param { Number } width Width of the panel in pixels, default is 275.
     */
    constructor( engine , width = 275 ) {
        this.gui = new GUI( { width: width } );
        this.engine = engine;
        this.params = {
            planeConstantY: 0,
            planeConstantYNeg: 0,
            planeConstantZ: 0,
            planeConstantZNeg: 0,
            planeConstantXNeg: 0,
            planeConstantX: 0,
            cameraFOV: this.engine.defaultFOV,
            areNotesShowed: true,
            resetFOV: this.engine.setFOV.bind(this.engine),
            resetView: this.resetView.bind(this),
            resetClipping: this.setClipping.bind(this),
        };
        this.controlsWereSet = false;
        window.addEventListener('resize', this.handleResizing.bind(this));
        this.handleResizing();
    }

    /**
     * Method that sets all necessary controls to manipulate a model.
     */
    setControls() {
        // Folder with camera controls
        const camera = this.gui.addFolder('Камера');
        camera.add(this.params, 'cameraFOV', 0.1, 179)
            .step( 0.1 )
            .name( 'Поле зрения' ).onChange( (value) => {
                this.engine.setFOV( value );
                this.engine.render();
        } );

        camera.add(this.params, 'resetFOV').name('Сбросить');

        // Folder with clipping controls
        const clipping = this.gui.addFolder('Сечения');
        [
            ['planeConstantY', 'y', 0, 'Сверху'], ['planeConstantYNeg', 'y', 1, 'Снизу'],
            ['planeConstantX', 'x', 4, 'Спереди'], ['planeConstantXNeg', 'x', 5, 'Сзади'],
            ['planeConstantZ', 'z', 2, 'Слева'], ['planeConstantZNeg', 'z', 3, 'Справа'],

        ].forEach( (case_) => {
            clipping.add(this.params, case_[0], this.engine.boundBox.min[case_[1]], this.engine.boundBox.max[case_[1]])
                .step( 10 )
                .name( case_[3] )
                .onChange( (value) => {
                    this.engine.clipPlanes[case_[2]].constant = (-1) ** case_[2] * value;
                    this.engine.render();
                } );
        } );

        clipping.add(this.params, 'resetClipping').name('Сбросить сечения');

        // Option to hide/show notes
		this.gui.add( this.params, 'areNotesShowed' )
            .name( 'Заметки' )
            .onChange( ( value ) => {
                this.engine.scene.traverse( (o) => {
                    if (o.isSprite) {
                        o.material.visible = value;
                    }
                } );
                this.engine.render();
            });
		this.gui.add(this.params, 'resetView').name('Сбросить вид');

        clipping.open(); // To make it appear opened

        // To make controls being set only once
        if (!this.controlsWereSet) {
            this.controlsWereSet = true;
        }
    }

    /**
     * Method that sets clipping in engine and in GUI. If a view point wasn't passed, it sets default clipping.
     *
     * @param { ViewPoint } [viewPoint] A view point instance which clipping should be applied. Optional.
     */
    setClipping( viewPoint ) {
        const boundBox = this.engine.boundBox;
        let array = [boundBox.max.y, -boundBox.min.y, boundBox.max.z, -boundBox.min.z, boundBox.max.x, -boundBox.min.x];
        const paramsArray = [
            'planeConstantY', 'planeConstantYNeg',
            'planeConstantZ', 'planeConstantZNeg',
            'planeConstantX', 'planeConstantXNeg',
        ];
        if ( viewPoint ) {
            const clipConstants = viewPoint.clip_constants;
            const clipStatuses = viewPoint.clip_constants_status;
            let prepared_array;
            if (clipConstants) { // do not present when the view point was imported
                prepared_array = clipConstants.map( num => -num );
                // Has to do this swap for some reason
                [ prepared_array[5], prepared_array[4] ] = [ prepared_array[4], prepared_array[5] ];
                for (let i=0; i<array.length; i++) {
                    if (clipStatuses[i]) {
                        array[i] = prepared_array[i];
                    }
                }
            }
        }
        for (let i = 0; i < array.length; i++) {
            this.engine.clipPlanes[i].constant = array[i];
            this.params[paramsArray[i]] = (-1) ** i * array[i];  // Should change sign in this exact order
        }
        if (!this.controlsWereSet) {
            this.setControls();
        }
        this.gui.updateDisplay();
        this.engine.render();
    }

    /**
     * Resets current view, also manages FOV value in the panel.
     */
    resetView() {
        this.engine.setDefaultView();
        this.params.cameraFOV = this.engine.defaultFOV;
        this.gui.updateDisplay();
    }

    /**
     * Method that listens to window resizing and closes the GUI if it is not suitable to show it.
     */
    handleResizing() {
        if (window.innerWidth < 540) {
            this.gui.close();
        }
    }
}
