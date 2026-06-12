import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCarousel = ({ projects }) => {
  const mountRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sceneRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef(null);
  const frameId = useRef(null);
  const clock = useRef(new THREE.Clock());

  // Navigation functions
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  // Create canvas texture for project card
  const createCardTexture = (project, index) => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 640;
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle gradient/pattern
    const gradient = ctx.createLinearGradient(0, 0, 1024, 640);
    gradient.addColorStop(0, '#1a1a1a');
    gradient.addColorStop(1, '#0a0a0a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Project Number
    ctx.font = 'bold 40px sans-serif';
    ctx.fillStyle = '#333333';
    ctx.fillText((index + 1).toString().padStart(2, '0'), 50, 80);

    // Project Name
    ctx.font = 'bold 64px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(project.title, 50, 160);

    // Subtitle / Category
    ctx.font = '300 32px sans-serif';
    ctx.fillStyle = '#888888';
    ctx.fillText(project.category || 'Full-Stack', 50, 210);

    // URL
    ctx.font = '400 24px monospace';
    ctx.fillStyle = '#444444';
    ctx.fillText(project.link.replace('https://', '').replace('/', ''), 50, 260);

    // Description (multi-line)
    ctx.font = '300 28px sans-serif';
    ctx.fillStyle = '#aaaaaa';
    const words = project.description.split(' ');
    let line = '';
    let y = 340;
    let lineCount = 0;
    for (let n = 0; n < words.length; n++) {
      if (lineCount >= 3) break;
      let testLine = line + words[n] + ' ';
      let metrics = ctx.measureText(testLine);
      if (metrics.width > 900 && n > 0) {
        ctx.fillText(line, 50, y);
        line = words[n] + ' ';
        y += 48;
        lineCount++;
      } else {
        line = testLine;
      }
    }
    if (lineCount < 3) ctx.fillText(line, 50, y);

    // Tech Tags
    let x = 50;
    project.tech.slice(0, 5).forEach((tag) => {
      ctx.font = '500 20px monospace';
      const textWidth = ctx.measureText(tag.toUpperCase()).width;
      
      // Pill bg
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      roundRect(ctx, x, 520, textWidth + 30, 40, 5);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.fillText(tag.toUpperCase(), x + 15, 547);
      x += textWidth + 50;
    });

    // Diagonal line decoration
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(850, 0);
    ctx.lineTo(1024, 174);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    return texture;
  };

  function roundRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  }

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(60, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    mountRef.current.appendChild(renderer.domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2, 6);
    pointLight.position.set(0, 0, 1);
    scene.add(pointLight);

    // CARDS
    const cardGeometry = new THREE.PlaneGeometry(3.2, 2.0);
    const meshes = projects.map((project, i) => {
      const material = new THREE.MeshStandardMaterial({
        map: createCardTexture(project, i),
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide
      });
      const mesh = new THREE.Mesh(cardGeometry, material);
      scene.add(mesh);
      return mesh;
    });
    cardsRef.current = meshes;

    // PARTICLES
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(120 * 3);
    for (let i = 0; i < 120 * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 16;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.015,
      transparent: true,
      opacity: 0.3
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // LERP HELPER
    const lerp = (start, end, t) => start + (end - start) * t;

    // RENDER LOOP
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);
      const time = clock.current.getElapsedTime();

      // Update card targets based on activeIndex
      meshes.forEach((mesh, i) => {
        let targetX = 0, targetZ = 0, targetRotY = 0, targetScale = 1, targetOpacity = 1;

        // Logic for circular carousel
        const diff = (i - activeIndex + projects.length) % projects.length;
        
        if (diff === 0) {
          targetX = 0;
          targetZ = 0;
          targetRotY = 0;
          targetScale = 1;
          targetOpacity = 1;
          mesh.position.y = lerp(mesh.position.y, Math.sin(time * 0.8) * 0.06, 0.1);
        } else if (diff === 1 || (diff === projects.length - 1 && projects.length > 2)) {
          targetX = 3.8;
          targetZ = -1.5;
          targetRotY = -0.4;
          targetScale = 0.82;
          targetOpacity = 0.45;
          mesh.position.y = lerp(mesh.position.y, 0, 0.1);
        } else if (diff === projects.length - 1 || (diff === 1 && projects.length === 2)) {
          targetX = -3.8;
          targetZ = -1.5;
          targetRotY = 0.4;
          targetScale = 0.82;
          targetOpacity = 0.45;
          mesh.position.y = lerp(mesh.position.y, 0, 0.1);
        } else {
          targetX = 0;
          targetZ = -5;
          targetRotY = 0;
          targetScale = 0.5;
          targetOpacity = 0;
          mesh.position.y = lerp(mesh.position.y, 0, 0.1);
        }

        // Apply Lerp
        mesh.position.x = lerp(mesh.position.x, targetX, 0.07);
        mesh.position.z = lerp(mesh.position.z, targetZ, 0.07);
        mesh.rotation.y = lerp(mesh.rotation.y, targetRotY, 0.07);
        mesh.scale.x = lerp(mesh.scale.x, targetScale, 0.07);
        mesh.scale.y = lerp(mesh.scale.y, targetScale, 0.07);
        mesh.material.opacity = lerp(mesh.material.opacity, targetOpacity, 0.07);
      });

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0003;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
      meshes.forEach(m => {
        m.geometry.dispose();
        m.material.dispose();
        if (m.material.map) m.material.map.dispose();
      });
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, [projects, activeIndex]);

  return (
    <motion.div 
      className="relative w-full overflow-hidden"
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div 
        ref={mountRef} 
        className="w-full h-[400px] md:h-[550px]"
      ></div>

      <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 md:px-10">
        <button
          onClick={handlePrev}
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:scale-110 active:scale-95 group"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center"
          >
            <Link 
              to={`/project/${projects[activeIndex].id}`}
              className="pointer-events-auto inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-colors shadow-2xl"
            >
              View Project Case Study
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`pointer-events-auto w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'bg-white w-6' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCarousel;
