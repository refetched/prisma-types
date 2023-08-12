# @refetched/prisma-types

This package exports refetched prisma types.

## User Guide

### Install Package

```bash
npm install -D @refetched/prisma-types
```

### Uninstall Package

```bash
npm uninstall @refetched/prisma-types
```

## Developer Guide

### Install Dependencies

```bash
npm install .
```

### New Feature

#### Add Type Definition

Change directory to `src/types`. Create type definition file (i.e. `Example.ts`). Export type definition file in `src/types/index.ts`.

#### Update Type Definition

Change directory to `src/types`. Update type definition file (i.e. `Example.ts`).

#### Remove Type Definition

Change directory to `src/types`. Delete type definition file (i.e. `Example.ts`). Delete type definition file export in `src/types/index.ts`.

### Bump version

There are three scenarios for bumping versions: patch release, minor release, major release.

#### Patch Release

These releases are for backward compatible bug fixes. To perform a patch release increment the third digit (i.e. `1.0.1`).

#### Minor Release

These releases are for backward compatible new features. To perform a minor release increment the middle digit and reset last digit to zero (i.e. `1.1.0`).

#### Major Release

These relases are for changes that break backwards compatibility. To perform a major release increment the first digit and reset the middle and last digits to zero (i.e. `2.0.0`).
