from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        # Navigate to the homepage
        page.goto("http://localhost:4321")

        # Click the search button
        search_button = page.locator("#search-button")
        expect(search_button).to_be_visible()
        search_button.click()

        # Wait for the dialog to be visible
        search_dialog = page.locator("#search-dialog")
        expect(search_dialog).to_be_visible()

        # Take a screenshot of the modal
        page.screenshot(path="jules-scratch/verification/search-modal.png")

        # Type into the search input
        search_input = page.locator("#search-input")
        search_input.type("composites")

        # Wait for results to appear
        # We expect at least one result item to be visible
        expect(page.locator("#search-results li")).to_have_count(1, timeout=5000)

        # Take a screenshot of the results
        page.screenshot(path="jules-scratch/verification/search-results.png")

    finally:
        browser.close()

with sync_playwright() as playwright:
    run(playwright)
