// Copyright (C) 2024 The Android Open Source Project
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  CustomSqlDetailsPanelConfig,
  CustomSqlTableDefConfig,
  CustomSqlTableSliceTrack,
} from '../../frontend/tracks/custom_sql_table_slice_track';
import {NamedSliceTrackTypes} from '../../frontend/named_slice_track';
import {ScreenshotTab} from './screenshot_panel';

export class ScreenshotsTrack extends CustomSqlTableSliceTrack<NamedSliceTrackTypes> {
  static readonly kind = 'dev.perfetto.ScreenshotsTrack';

  getSqlDataSource(): CustomSqlTableDefConfig {
    return {
      sqlTableName: 'android_screenshots',
      columns: ['*'],
    };
  }

  getDetailsPanel(): CustomSqlDetailsPanelConfig {
    return {
      kind: ScreenshotTab.kind,
      config: {
        sqlTableName: this.tableName,
        title: 'Screenshots',
      },
    };
  }
}
