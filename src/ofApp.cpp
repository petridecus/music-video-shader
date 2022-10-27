#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    fileName = "testMovie";
    fileExt = ".mov";

    ofSetFrameRate(60);

    chromaKeyShader.load("shaders/chromakey");
    chromaKeyShader2.load("shaders/chromakey");
    waterColorShader.load("shaders/water_color");

    vid.load("cropped_gtr_vid_1.mp4");
    // vid.load("albatross.mp4");
    vid.setVolume(0);
    vid.play();
}

//--------------------------------------------------------------
void ofApp::update(){
    vid.update();
}

//--------------------------------------------------------------
void ofApp::draw(){
// #639068
    waterColorShader.begin();
    waterColorShader.setUniform1f("u_time", ofGetElapsedTimef());
    ofDrawRectangle(0, 0, ofGetWidth(), ofGetHeight());
    waterColorShader.end();

    chromaKeyShader.begin();
    chromaKeyShader.setUniform3f("chromaKeyColor1", ofVec3f(.2, 1.2, .2));
    chromaKeyShader.setUniform3f("chromaKeyColor2", ofVec3f(0, .6, .0));
    chromaKeyShader.setUniform1f("threshold1", .8);
    chromaKeyShader.setUniform1f("threshold2", .5);
    chromaKeyShader.setUniform1f("u_time", ofGetElapsedTimef());

    vid.draw((ofGetWidth() / 2.0) - ((vid.getWidth() / 3.0)),
             ofGetHeight() - ((vid.getHeight() / 1.5) * 1.1),
             vid.getWidth() / 1.5, vid.getHeight() / 1.5);

    chromaKeyShader.end();
}
