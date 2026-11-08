import test from 'node:test';
import assert from 'node:assert/strict';
import { ui } from './ui';
import { getLocaleFromPath, stripLocale, localizedPath, alternatePath, t } from './utils';
import { projects } from '../data/projects';
import { certificates, formatDate } from '../data/certificates';
import { skillGroups } from '../data/skills';

test('bilingual UI dictionary resolves every key in both English and Spanish', () => {
  const enKeys = Object.keys(ui.en);
  for (const key of enKeys) {
    assert.ok(t('en', key).length > 0, `Empty en translation for ${key}`);
    assert.ok(t('es', key).length > 0, `Empty es translation for ${key}`);
  }
});

test('route localization helpers map English and Spanish paths accurately', () => {
  assert.equal(getLocaleFromPath('/'), 'en');
  assert.equal(getLocaleFromPath('/work/coro'), 'en');
  assert.equal(getLocaleFromPath('/es'), 'es');
  assert.equal(getLocaleFromPath('/es/work/coro'), 'es');
  assert.equal(getLocaleFromPath('/espacio'), 'en');

  assert.equal(stripLocale('/es'), '/');
  assert.equal(stripLocale('/es/work/coro'), '/work/coro');
  assert.equal(stripLocale('/work'), '/work');

  assert.equal(localizedPath('/', 'es'), '/es/');
  assert.equal(localizedPath('/work', 'es'), '/es/work');
  assert.equal(localizedPath('/es/work', 'en'), '/work');
  assert.equal(localizedPath('/es/', 'en'), '/');

  assert.equal(alternatePath('/'), '/es/');
  assert.equal(alternatePath('/es/'), '/');
  assert.equal(alternatePath('/work/coro'), '/es/work/coro');
  assert.equal(alternatePath('/es/work/coro'), '/work/coro');
});

test('projects data contains CORO, SIA, and Votech with complete bilingual sections', () => {
  assert.equal(projects.length, 3);
  assert.deepEqual(
    projects.map((p) => p.slug),
    ['coro', 'sia', 'votech']
  );

  for (const project of projects) {
    assert.ok(project.title.length > 0);
    assert.ok(project.image.startsWith('/images/'));
    assert.ok(project.description.en.length > 0);
    assert.ok(project.description.es.length > 0);
    assert.ok(project.sections.length >= 2);
  }
});

test('certificates data and skills groups match specification', () => {
  assert.equal(certificates.length, 2);
  assert.ok(formatDate('2026-10-28', 'en').includes('2026'));
  assert.ok(formatDate('2026-10-28', 'es').includes('2026'));

  assert.equal(skillGroups.length, 5);
  const allSkills = skillGroups.flatMap((g) => g.tags);
  assert.ok(allSkills.includes('C++'));
  assert.ok(allSkills.includes('TypeScript'));
  assert.ok(allSkills.includes('PostgreSQL'));
  assert.ok(allSkills.includes('Neovim'));
});
