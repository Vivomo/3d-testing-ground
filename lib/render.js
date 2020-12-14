import * as THREE from './three.module.js';
import {OrbitControls} from './OrbitControls.js';

let App = {

    mouse: new THREE.Vector2(),
    raycaster: new THREE.Raycaster(),

    render() {
        let _render = () => {
            this.renderer.render(this.scene, this.camera);
            requestAnimationFrame(_render);
        };
        _render();
    },

    drawAxes() {
        let axesHelper = new THREE.AxesHelper(20);
        this.scene.add(axesHelper);
    },

    initRender() {
        this.scene = new THREE.Scene();
        let renderer = this.renderer = new THREE.WebGLRenderer({
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    },

    initCamera() {
        let camera = this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(24, 24, 24);
        camera.lookAt(0, 0, 0);
    },

    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    },


    listenEvent() {

    },

    addLight() {
        this.scene.add(new THREE.AmbientLight(0xffffff));
    },

    init() {
        this.initRender();
        this.initCamera();
        this.addLight();
        this.drawAxes();
        this.render();
        this.listenEvent();
        this.initControls();
    }
};

export default App;