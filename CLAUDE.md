# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

- プロジェクト名: quiz-app
- 概要: 一般常識クイズアプリ
- 技術スタック: HTML / CSS / JavaScript(素のフロントエンド構成。フレームワークやビルドツールは現時点で未導入)

現在このリポジトリは初期状態(空)であり、まだソースコードは存在しない。今後ファイルを追加していく際は、このセクションと以下の方針を踏まえて構成すること。

## 開発方針

- ビルドツール・パッケージマネージャを導入していない限り、`npm install` や `npm run build` などのコマンドは存在しない。ファイルを追加してビルド/実行手順が生まれた場合は、このファイルの「コマンド」セクションを追記・更新すること。
- ブラウザで直接 `index.html` を開く、または簡易HTTPサーバー(例: VSCodeのLive Server拡張など)で動作確認する構成を想定している。
