# Get a Budget
A subscription-free budgeting solution.

## Installation

Clone the repository
```bash
git clone https://github.com/AryanJ-NYC/get-a-budget
```

Install dependencies
```bash
cd get-a-budget
npm install
```

Development
```bash
npm run develop
```

## Packaging

Modify [electron-builder.yml](./electron-builder.yml) to edit package info.

Create a package for OSX, Windows and Linux
```
npm run pack
```

Or target a specific platform
```
npm run pack:mac
npm run pack:win
npm run pack:linux
```

## Tests

```
npm run test
```

## Maintainers

- [@AryanJ-NYC](https://github.com/AryanJ-NYC)
- [@alessandrodimarco](https://github.com/alessandrodimarco)
