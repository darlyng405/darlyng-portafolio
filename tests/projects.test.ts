import { describe, it, expect } from 'vitest';
import { projects } from '../src/data/projects';

describe('Projects Data', () => {
  it('should contain exactly 3 projects', () => {
    expect(projects).toHaveLength(3);
  });

  it('should have the correct slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual(['coro', 'sia', 'votech']);
  });

  it('should not contain empty tags', () => {
    projects.forEach((p) => {
      p.tech.forEach((tag) => {
        expect(tag).not.toBe('');
      });
    });
  });
});
