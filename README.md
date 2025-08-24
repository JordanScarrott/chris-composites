# blackspike astro landing page

[<img src="public/theme-preview/github-preview.jpg" alt="screens showing theme parts on iPads" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/github-preview.jpg)

## A free, modern, [Astro](https://astro.build/) landing page theme made with [Tailwind](https://tailwindcss.com/) to help kick start your next Astro project

We built this page as the first version of our own website, [blackspike.com](https://www.blackspike.com), but switched to a different design later.

Rather than let it gather dust, we decided to modernise it, try out some fresh new CSS features and give it back to the Astro community.

You can read more about how we built it and the cool new tech we used [on our blog post](https://www.blackspike.com/blog/blackspike-free-astro-tailwind-theme/).

Now available as an official Astro theme! [Download it from the Astro themes page](https://astro.build/themes/details/blackspike-astro-landing-page/)

## Table of Contents

- [Live Demo](#live-demo-httpsastro-themeblackspikecom)
- [License](#license)
- [Features](#features)
  - [Astro 5 Features](#astro-5-features)
  - [CSS & HTML Features](#css--html-features)
  - [JS Features](#js-features)
- [Architecture](#architecture)
- [Previews](#previews)
- [Credits](#credits)
- [Tags](#tags)
- [Commands](#commands)

## Live demo https://astro-theme.blackspike.com

We hope you find it useful!

## License

Theme and 3D images are licensed under a [Creative Commons Attribution 4.0 International Public License](https://creativecommons.org/licenses/by/4.0/).

Created by blackspike [blackspike design](https://www.blackspike.com) – a web design & development team specialising in Astro, Vue, Nuxt & Wordpress websites

## Features

### Astro 5 Features

- [Image component](https://docs.astro.build/en/guides/images/#display-optimized-images-with-the-image--component) for optimised AVIF images
- All-[JSX](https://docs.astro.build/en/reference/astro-syntax/) native astro components
- SVGs imported as [SVG components](https://docs.astro.build/en/guides/images/#svg-components)
- JSON-powered content (easy to edit UI text or hook up a CMS!)
- Experimental [Fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/)

### CSS & HTML Features

- [Tailwind 4](https://tailwindcss.com/blog/tailwindcss-v4)
- HTML modal dialog
- JS-free scroll-linked animations
- JS-free exclusive accordions with details/summary (animated!)
- Container queries
- Linear easing for bouncing / springing
- Text wrap pretty / balance

### JS Features

- [swiper.js](https://swiperjs.com/) carousel

## Architecture

This project uses a **Ports and Adapters** pattern (also known as Hexagonal Architecture) to separate the core application logic from external services and data sources. This makes the application more modular, easier to test, and simpler to maintain.

The key idea is to define "ports" (interfaces and their associated DTOs) that our application uses, and then create "adapters" that implement these interfaces to connect to external systems.

-   **Adapters** are located in `src/lib/adapters/`.
-   **Data Transfer Objects (DTOs)** are centralized in `src/lib/shared/dtos/`.

### The Anatomy of an Adapter

Each feature that interacts with an external data source follows a consistent structure. Let's use the `auth` feature as an example:

-   **The DTO:** `src/lib/shared/dtos/user.dto.ts`
    This file defines the `User` DTO. DTOs are application-specific data structures. They are kept separate from adapters to allow them to be shared across different parts of the application.

-   **The Port (Interface):** `src/lib/adapters/auth/interface.ts`
    This file defines the `Auth` interface. It imports the `User` DTO and uses it in its contract. It specifies the actions the application can perform.

-   **The Client:** `src/lib/adapters/auth/mockAuthClient.ts`
    The client is responsible for the low-level details of communicating with the external service and returning its raw data. It is completely ignorant of the application's internal DTOs.

-   **The Adapter:** `src/lib/adapters/auth/authAdapter.ts`
    The adapter is the bridge between the client and the application. Its primary responsibility is to:
    1.  Call the client to fetch raw data.
    2.  **Translate that raw data into the application's DTO (`User`).**
    3.  Implement the `Auth` interface, returning the DTO to the application.

### How to Add a New Adapter

When you need to connect to a new data source (for example, a chat service), follow these steps:

1.  **Define the DTO:**
    First, create the DTO for your feature in the shared directory.

    ```typescript
    // src/lib/shared/dtos/chat.dto.ts
    export interface ChatMessage {
      id: string;
      message: string;
      from: string;
    }
    ```

2.  **Create the Adapter Directory:**
    Create a new directory for your feature under `src/lib/adapters/`. For a chat feature, this would be `src/lib/adapters/chat/`.

3.  **Define the Interface (the Port):**
    Create an `interface.ts` file inside your new directory. Import your DTO and define the interface for the actions.

    ```typescript
    // src/lib/adapters/chat/interface.ts
    import type { ChatMessage } from '../../shared/dtos/chat.dto';
    export type { ChatMessage }; // Re-export for convenience

    export interface Chat {
      getMessages(): Promise<ChatMessage[]>;
      sendMessage(text: string): Promise<void>;
    }
    ```

4.  **Create a Client:**
    Create a client file that handles the actual data fetching. It should return raw data, not DTOs.

    ```typescript
    // src/lib/adapters/chat/mockChatClient.ts
    const rawMessages = [{ msg_id: '1', msg_text: 'Hello!', author_name: 'Jules' }];
    export class MockChatClient { /* ... */ }
    ```

5.  **Create the Adapter (and Translate):**
    Create an adapter file that implements the interface. This is where you import your DTO and translate the raw data from the client into it.

    ```typescript
    // src/lib/adapters/chat/chatAdapter.ts
    import type { Chat, ChatMessage } from './interface';
    import { MockChatClient } from './mockChatClient';
    // No need to import the DTO directly, as it's exported from interface.ts

    class ChatAdapter implements Chat {
      async getMessages(): Promise<ChatMessage[]> {
        // ... fetch raw messages and translate them to ChatMessage[]
      }
      /* ... */
    }
    ```

6.  **Use the Adapter in Your Components:**
    Finally, in your Astro components, import and use your new adapter. The component will receive clean, predictable DTOs.

## Previews

[<img src="public/theme-preview/blackspike-theme-1.jpg" alt="screenshot of dark theme landing page on desktop and on ipad browsers" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-1.jpg)

[<img src="public/theme-preview/blackspike-theme-2.jpg" alt="screenshot of dark theme carousel slides with 3D backgrounds" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-2.jpg)

[<img src="public/theme-preview/blackspike-theme-4.jpg" alt="screens showing theme parts" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-4.jpg)

[<img src="public/theme-preview/blackspike-theme-5.jpg" alt="dark theme pricing section on laptop and iPhone browsers" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-5.jpg)

[<img src="public/theme-preview/blackspike-theme-full.webp" alt="full page preview" style="max-width: 100%; height: auto; width: 100%;" width="1600">](public/theme-preview/blackspike-theme-full.webp)

## Credits

- Fake logos by [uicontent.co](https://uicontent.co/svg-dummy-logo/)
- Quote avatar person by [thispersondoesnotexist.com](https://thispersondoesnotexist.com/)
- Misc icons and logo from [icones.js.org](https://icones.js.org/) by [@antfu](https://github.com/antfu)
- Carousel powered by [swiperjs.com](https://swiperjs.com/)
- Inter font by [rsms.me](https://rsms.me/inter/)

## Tags

#tailwind #tailwind4 #astro #landingPage #css #html #swiper #dark #theme

## Commands

All commands are run from the root of the project, from a terminal. This project uses `pnpm` as the package manager.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
