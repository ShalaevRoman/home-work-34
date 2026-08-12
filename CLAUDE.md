# Claude Code Guidelines for This Project

## Git Commit Conventions

### ❌ NEVER Do This
- **Never add Claude attribution** to commits (no `Co-Authored-By: Claude`)
- Never use generic messages like "update code" or "make changes"
- Never write long, paragraph-style commit messages

### ✅ Always Do This
- Use **Conventional Commits** format:
  - `feat:` - New feature
  - `fix:` - Bug fix
  - `docs:` - Documentation changes
  - `refactor:` - Code refactoring
  - `test:` - Test additions or changes
  - `style:` - Formatting, missing semicolons, etc.
  - `chore:` - Dependency updates, build changes

### Examples
```bash
# Good
git commit -m "feat: add favorites functionality with localStorage"
git commit -m "fix: correct GitHub Pages URL in README"
git commit -m "docs: update installation instructions"

# Bad
git commit -m "Update code - Claude"
git commit -m "Co-Authored-By: Claude <noreply@anthropic.com>"
git commit -m "Make some changes"
```

## Code Style

- Use meaningful variable names
- Keep functions focused and modular
- Add comments only when "WHY" is non-obvious
- No over-engineering for hypothetical future needs

## Testing

- Test UI changes in browser before marking complete
- Don't rely only on tests - verify user-facing features work
- Check for regressions in existing features

## File Organization

- Prefer editing existing files over creating new ones
- Keep sensitive data (API keys, credentials) in `.gitignore`
- Maintain clean git history

---

**Note for future projects:** Copy this file to new projects to maintain consistent guidelines across all homework assignments.