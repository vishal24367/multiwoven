# frozen_string_literal: true

module Multiwoven
  module Integrations
    VERSION = "0.1.28"

    ENABLED_SOURCES = %w[
      Snowflake
      Redshift
      Bigquery
      Postgresql
    ].freeze

    ENABLED_DESTINATIONS = %w[
      Klaviyo
      SalesforceCrm
      FacebookCustomAudience
      Slack
    ].freeze
  end
end
