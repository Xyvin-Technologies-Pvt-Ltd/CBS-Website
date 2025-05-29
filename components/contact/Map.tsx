"use client";

export default function Map() {
  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4668162774674!2d58.54059731495987!3d23.595722984667036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91f6d3acaa4d6d%3A0x944d21c4f0e653d6!2sKnowledge%20Oasis%20Muscat!5e0!3m2!1sen!2som!4v1645000000000!5m2!1sen!2som"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
        title="CBS Office Location"
      />
      <div className="absolute bottom-4 right-4 bg-white py-2 px-4 rounded-lg shadow-md text-sm">
        <p className="font-medium text-heading">CBS Office</p>
        <p className="text-muted">Knowledge Oasis Muscat</p>
      </div>
    </div>
  );
} 