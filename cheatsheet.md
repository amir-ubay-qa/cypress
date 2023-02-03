# A. Find Elements

### 1. Get Element (returns Cypress Chainer object)

    cy.get(‘#cssSelector)

### 2. Find elements off parent element

    cy.get(‘#cssSelector).find(‘#anotherSelector’)

### 3. Return the first element from array of elements

    cy.get('nav list’).first()

### 4. Iterate through array of elements

    cy.get('nav list’).each(() => {...})

### 5. Create alias for element

    cy.get('table').find('tr').as('rows')
    cy.get('@rows').first().click()

### 6. Get the element that contains the passed text

    cy.get(‘button’).contains(‘Click me’)

# B. Interacting with the DOM

### 1. Click an element

    cy.get(‘button’).contains(‘Login’).click()
    cy.get(‘button’).contains(‘Login’).dblclick()
    cy.get(‘button’).contains(‘Login’).rightclick()

### 2. Select an option from a dropdown

    cy.get(‘dropdownselector’).select('user-1')

### 3. Trigger an event

    cy.get('alink').trigger('mousedown')

### 4. Enter or clear text in an input or text field

    cy.get(‘textfield’).type(‘stringtotype’)
    cy.get(‘textfield’).clear()

### 5. Interact with a checkbox

    cy.get(‘checkboxToUse’).check()
    cy.get(‘checkboxToUse’).uncheck()

### 6. Focus on an element in the DOM

    cy.get(‘textfield’).focus()

### 7. Blur a focused element

    cy.get(‘textfield’).blur()

### 8. Force an action even if element may not be actionable

    cy.get('button').click({ force: true })

# C. Then

### 1. Use the subject yielded from the previous action

    cy.get('.nav').then(($nav) => {})

    cy.get(‘button’).then((element) => {
      assert.include(element.text().toLowerCase(), ‘login’)
    })

    cy.wrap(1).then((num) => {
        cy.wrap(num).should('equal', 1)
      })
      .should('equal', 1)

    cy.get('.brand').then(function(logoElement){
      cy.log(logoElement.text())
    )}

# D. Window/Browser Interaction

### 1. Simulate Back and Forward in browser

    cy.go(‘back’)
    cy.go(‘forward’)

### 2. Navigate to URL

    cy.visit(‘https://www.google.co.uk’)

### 3. Refresh the page

    cy.reload()

# E. Scroll the window

### 1. x and y coordinates to scroll to

    cy.scrollTo(x, y)

### 2. Clear cookies

    cy.clearCookies()

### 3. Take a screenshot, full page or of an element

    cy.screenshot()

# F. Assertions using Should

### 1. Check the state

    cy.get('checkboxelement’).should('be.checked')

### 2. Check if exists

    cy.get('#loading').should('not.exist')

### 3. Check if visible

    cy.get('button').should('be.visible')

### 4. Check if enabled

    cy.get('checkbox').should('be.enabled)

### 5. Check value

    cy.get('textarea').should('have.value',’value is correct’)

### 6. Check length

    cy.get('li.selected').should('have.length', 3)
