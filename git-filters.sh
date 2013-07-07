##
# This script will configure git to replace all tabs with spaces as files are
#  committed and checked out.
#
# AUTHOR: Josh Gillham
# VERSION: 7-6-13

# Create git filters to replace tabs with 4 spaces.
git config filter.notabs.clean 'expand --tabs=4'
git config filter.notabs.smudge 'expand --tabs=4'

# Create git filters to replace tabs with 2 spaces.
git config filter.notabs2.clean 'expand --tabs=2'
git config filter.notabs2.smudge 'expand --tabs=2'
