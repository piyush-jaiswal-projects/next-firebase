# Generate Meeting Link Using Zoom APIs

## Features
1. Authentication using Firebase.  
2. Get personal meeting link using ZOOM APIs.  

## IMPORTANT
For generating meeting url for a third person user, PRO subscription of ZOOM APIs required. In existing flow, if /api/user route returns, that user is unregistered. Then we have to register the user. The code for the same has been added. It might need a bit of modification, after integrating PRO APIs.  

NOTE: If user has already signed up to zoom using third party apps such as Google, Microsoft, etc, then the ZOOM API still returns the user as not registered.

## Add Following to .env file
NEXT_PUBLIC_FIREBASE_APP_ID=""  
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""  
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""  
NEXT_PUBLIC_FIREBASE_API_KEY=""  
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""  


NEXT_PUBLIC_ZOOM_ACCOUNT_ID=""  
NEXT_PUBLIC_ZOOM_CLIENT_ID=""  
NEXT_PUBLIC_ZOOM_CLIENT_SECRET=""  
NEXT_PUBLIC_ZOOM_ACCESS_TOKEN=""  


NEXT_PUBLIC_ZOOM_API_BASE_URL="https://api.zoom.us/v2"  

