<div>
  <label class="block mb-2 font-semibold">Upload a Photo</label>
  <input type="hidden" role="uploadcare-uploader" data-crop="1:1" data-images-only data-clearable id="upload-widget" />
  <p class="text-xs text-gray-500 mt-1">We'll delete the photo after creating your magical avatar.</p>
</div>

<div class="space-y-4">
  <div>
    <label class="block mb-1 font-semibold">Child's Name</label>
    <input id="child-name" type="text" placeholder="Ella, Jayden..." class="w-full border border-gray-300 rounded-xl px-4 py-3" oninput="updatePreviewName()" />
  </div>
  <div>
    <label class="block mb-1 font-semibold">Age</label>
    <input type="number" min="0" placeholder="4" class="w-full border border-gray-300 rounded-xl px-4 py-3" />
  </div>
  <div>
    <label class="block mb-1 font-semibold">Favorite Color</label>
    <input type="text" placeholder="Blue, pink..." class="w-full border border-gray-300 rounded-xl px-4 py-3" />
  </div>
  <div>
    <label class="block mb-1 font-semibold">Dedication Message</label>
    <textarea rows="2" placeholder="Happy Birthday! We love you!" class="w-full border border-gray-300 rounded-xl px-4 py-3"></textarea>
  </div>
</div>

<div class="text-center pt-6">
  <p class="text-base text-sky-700 font-medium mb-2">Want 50% off your first storybook?</p>
  <input name="email" type="email" required placeholder="Enter your email" class="border border-gray-300 rounded-full px-5 py-3 w-full mb-4">
  <button class="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3 rounded-full shadow-md">Get My Discount</button>
</div>
