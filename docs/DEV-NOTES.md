# Development Notes

## State Management

### Decision: React Context
We've decided to use React Context for state management in our TV application. This decision was made after careful consideration of our requirements and future scalability needs.

### Implementation Guidelines

#### 1. Context Structure
- Create separate contexts for different domains:
  ```jsx
  // Example structure
  src/contexts/
    ├── ThemeContext.jsx
    ├── UserContext.jsx
    ├── NavigationContext.jsx
    └── SettingsContext.jsx
  ```

#### 2. Context Provider Pattern
- Use a provider component for each context
- Implement custom hooks for consuming contexts
- Example:
  ```jsx
  // ThemeContext.jsx
  export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  // Custom hook
  export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
  };
  ```

#### 3. Performance Considerations
- Use `useMemo` for context values to prevent unnecessary re-renders
- Split contexts by domain to avoid unnecessary re-renders
- Implement `useCallback` for context methods
- Example:
  ```jsx
  const value = useMemo(() => ({
    theme,
    setTheme,
    toggleTheme: useCallback(() => {
      setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    }, [])
  }), [theme]);
  ```

#### 4. Testing
- Create test utilities for context providers
- Mock contexts in component tests
- Test context hooks independently

### When to Use Context
- Global UI state (theme, layout)
- User preferences
- Authentication state
- App-wide settings
- Navigation state

### When Not to Use Context
- Component-local state (use useState)
- Form state (use form libraries)
- Complex data fetching (use React Query/SWR)
- Temporary UI state

### Migration Path
If we need to scale our state management in the future:
1. Evaluate performance metrics
2. Identify pain points
3. Consider Redux or other solutions
4. Plan gradual migration strategy

### Best Practices
1. Keep contexts focused and minimal
2. Use TypeScript for better type safety
3. Document context APIs
4. Implement error boundaries
5. Monitor performance impact
6. Use React DevTools for debugging 