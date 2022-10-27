#pragma once

#include "ofMain.h"

class ofApp : public ofBaseApp{
	public:
		void setup();
		void update();
		void draw();

		ofVideoPlayer vid;
		ofShader chromaKeyShader;
		ofShader chromaKeyShader2;
		ofShader waterColorShader;

		string fileName;
		string fileExt;
		bool recording;

		ofFbo fbo;
		ofPixels pix;
};
