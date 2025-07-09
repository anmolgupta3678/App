import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import type { Engine } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  type?: 'stars' | 'floating' | 'network' | 'bubbles';
  color?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ 
  type = 'stars', 
  color = '#f7dc6f' 
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  const getParticleConfig = () => {
    const baseConfig = {
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: color,
        },
        links: {
          color: color,
          distance: 150,
          enable: type === 'network',
          opacity: 0.3,
          width: 1,
        },
        collisions: {
          enable: false,
        },
        move: {
          direction: 'none' as const,
          enable: true,
          outModes: {
            default: 'bounce' as const,
          },
          random: false,
          speed: type === 'bubbles' ? 3 : 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: type === 'network' ? 80 : type === 'bubbles' ? 50 : 160,
        },
        opacity: {
          value: type === 'bubbles' ? 0.3 : 0.5,
        },
        shape: {
          type: type === 'bubbles' ? 'circle' : 'star',
        },
        size: {
          value: { min: 1, max: type === 'bubbles' ? 8 : 3 },
        },
      },
      detectRetina: true,
    };

    return baseConfig;
  };

  return (
    <Particles
      id={`particles-${type}`}
      init={particlesInit}
      options={getParticleConfig()}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticleBackground;